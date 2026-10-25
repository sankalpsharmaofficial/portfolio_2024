import React, { useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import { palette } from '../../lib/content';
import { STOPS, stopCenters } from './layout';
import { Stations } from './Stations';

const ease = (t) => t * t * (3 - 2 * t);

// Moves the camera between stops as the page scrolls. Reads only scrollY and
// the cached stop positions, so nothing touches layout during a frame.
const CameraRig = () => {
	const look = useMemo(() => new THREE.Vector3(...STOPS[0].target), []);
	const pos = useMemo(() => new THREE.Vector3(), []);
	const tgt = useMemo(() => new THREE.Vector3(), []);
	const a = useMemo(() => new THREE.Vector3(), []);
	const b = useMemo(() => new THREE.Vector3(), []);
	const scratch = useMemo(() => new THREE.Vector3(), []);

	const shot = (stop, portrait, outPos, outTarget) => {
		if (!portrait) {
			outPos.set(...stop.pos);
			outTarget.set(...stop.target);
			return;
		}
		// Portrait: the text card fills the lower half, so pull back and aim below
		// the subject, in proportion to distance, to lift it into the upper third.
		outTarget.set(...stop.target);
		const offset = scratch.set(...stop.pos).sub(outTarget).multiplyScalar(stop.portrait?.pull ?? 1.6);
		outPos.set(...stop.focus).add(offset);
		outTarget.set(stop.focus[0], stop.focus[1] - offset.length() * (stop.portrait?.lift ?? 0.34), stop.focus[2]);
	};

	useFrame((state, delta) => {
		const centers = stopCenters.values;
		const portrait = state.size.width < state.size.height;
		const mid = window.scrollY + window.innerHeight / 2;

		let i = 0;
		while (i < centers.length - 2 && mid > centers[i + 1]) i++;
		const span = (centers[i + 1] ?? 1) - (centers[i] ?? 0) || 1;
		const t = centers.length > 1 ? ease(THREE.MathUtils.clamp((mid - centers[i]) / span, 0, 1)) : 0;
		const from = STOPS[i];
		const to = STOPS[Math.min(i + 1, STOPS.length - 1)];

		shot(from, portrait, pos, tgt);
		shot(to, portrait, a, b);
		pos.lerp(a, t);
		tgt.lerp(b, t);

		// A touch of pointer parallax on landscape screens
		if (!portrait) {
			pos.x += state.pointer.x * 0.35;
			pos.y += state.pointer.y * 0.2;
		}

		const cam = state.camera;
		const k = 1 - Math.exp(-8 * delta);
		cam.position.lerp(pos, k);
		look.lerp(tgt, k);
		cam.lookAt(look);
	});

	return null;
};

const World = () => {
	const [dpr, setDpr] = useState(1.5);
	const portrait = typeof window !== 'undefined' && window.innerWidth < window.innerHeight;

	return (
		<Canvas
			dpr={dpr}
			camera={{ position: STOPS[0].pos, fov: portrait ? 55 : 40, near: 0.1, far: 140 }}
			gl={{ antialias: true, powerPreference: 'high-performance' }}
		>
			{/* Step resolution down on devices that can't hold the frame rate */}
			<PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
			<color attach="background" args={[palette.sky]} />
			<fog attach="fog" args={[palette.sky, 22, 70]} />
			<hemisphereLight args={['#ffffff', '#bfe3ff', 1.3]} />
			<directionalLight position={[6, 10, 5]} intensity={1.8} />
			<Stations />
			<CameraRig />
		</Canvas>
	);
};

export default World;
