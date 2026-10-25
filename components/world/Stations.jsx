import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import { useRouter } from 'next/router';
import { career, palette, projects } from '../../lib/content';
import { DESK, MAILBOX, STONES, TOWER, WALL } from './layout';

// Everything is flat-shaded Lambert: the cheapest lit material, and it gives
// the low-poly toy look for free.
const Mat = ({ color, ...rest }) => <meshLambertMaterial color={color} flatShading {...rest} />;

// Honour reduced motion for idle animation (scroll-driven camera still moves).
const prefersStill = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------- islands
export const Island = ({ position, radius = 3, top = palette.mint }) => (
	<group position={position}>
		<mesh position={[0, -0.25, 0]}>
			<cylinderGeometry args={[radius, radius * 0.93, 0.5, 8]} />
			<Mat color={top} />
		</mesh>
		<mesh position={[0, -0.5 - radius * 0.375, 0]} rotation={[Math.PI, 0, 0]}>
			<coneGeometry args={[radius * 0.93, radius * 0.75, 8]} />
			<Mat color={palette.soil} />
		</mesh>
	</group>
);

// ---------------------------------------------------------------- desk (hero)
const useScreenTexture = () =>
	useMemo(() => {
		const c = document.createElement('canvas');
		c.width = 256;
		c.height = 168;
		const ctx = c.getContext('2d');
		ctx.fillStyle = palette.ink;
		ctx.fillRect(0, 0, 256, 168);
		// A few lines of "code" in the site's colours
		const lines = [
			[palette.pink, 0, 60],
			[palette.sun, 16, 120],
			[palette.mint, 16, 90],
			[palette.white, 32, 140],
			[palette.tomato, 16, 70],
			[palette.sun, 0, 40]
		];
		lines.forEach(([color, x, w], i) => {
			ctx.fillStyle = color;
			ctx.fillRect(18 + x, 22 + i * 22, w, 9);
		});
		const tex = new THREE.CanvasTexture(c);
		tex.colorSpace = THREE.SRGBColorSpace;
		return tex;
	}, []);

const Desk = () => {
	const screen = useScreenTexture();
	const steam = useRef();
	const plant = useRef();
	const still = useMemo(prefersStill, []);

	useFrame(({ clock }) => {
		if (still) return;
		const t = clock.elapsedTime;
		steam.current.children.forEach((puff, i) => {
			const k = (t * 0.5 + i / 3) % 1;
			puff.position.y = k * 0.6;
			puff.scale.setScalar(0.4 + k * 0.8);
			puff.material.opacity = 0.7 * (1 - k);
		});
		plant.current.rotation.z = Math.sin(t * 1.3) * 0.06;
	});

	return (
		<group position={DESK}>
			<Island position={[0, 0, 0]} radius={3.8} />
			{/* desk */}
			<mesh position={[0, 1.05, 0]}>
				<boxGeometry args={[3, 0.14, 1.5]} />
				<Mat color={palette.tomato} />
			</mesh>
			{[[-1.35, -0.6], [1.35, -0.6], [-1.35, 0.6], [1.35, 0.6]].map(([x, z]) => (
				<mesh key={`${x}${z}`} position={[x, 0.5, z]}>
					<boxGeometry args={[0.12, 1, 0.12]} />
					<Mat color={palette.ink} />
				</mesh>
			))}
			{/* laptop */}
			<mesh position={[0.1, 1.15, 0.15]}>
				<boxGeometry args={[1.1, 0.05, 0.75]} />
				<Mat color="#dfe3ee" />
			</mesh>
			<group position={[0.1, 1.17, -0.22]} rotation={[-0.25, 0, 0]}>
				<mesh position={[0, 0.36, 0]}>
					<boxGeometry args={[1.1, 0.72, 0.04]} />
					<Mat color="#dfe3ee" />
				</mesh>
				<mesh position={[0, 0.36, 0.022]}>
					<planeGeometry args={[1.0, 0.64]} />
					<meshBasicMaterial map={screen} toneMapped={false} />
				</mesh>
			</group>
			{/* mug and steam */}
			<group position={[-0.95, 1.12, 0.3]}>
				<mesh position={[0, 0.13, 0]}>
					<cylinderGeometry args={[0.14, 0.12, 0.26, 10]} />
					<Mat color={palette.sun} />
				</mesh>
				<mesh position={[0.15, 0.14, 0]} rotation={[0, 0, Math.PI / 2]}>
					<torusGeometry args={[0.07, 0.025, 6, 10]} />
					<Mat color={palette.sun} />
				</mesh>
				<group ref={steam} position={[0, 0.32, 0]}>
					{[0, 1, 2].map((i) => (
						<mesh key={i}>
							<sphereGeometry args={[0.06, 6, 6]} />
							<meshBasicMaterial color="white" transparent opacity={0.6} depthWrite={false} />
						</mesh>
					))}
				</group>
			</group>
			{/* plant */}
			<group ref={plant} position={[1.15, 1.12, -0.35]}>
				<mesh position={[0, 0.15, 0]}>
					<cylinderGeometry args={[0.17, 0.13, 0.3, 8]} />
					<Mat color={palette.pink} />
				</mesh>
				{[[0, 0.55, 0, 0.26], [-0.14, 0.42, 0.06, 0.18], [0.15, 0.45, -0.04, 0.2]].map(([x, y, z, s]) => (
					<mesh key={`${x}${y}`} position={[x, y, z]} scale={s}>
						<icosahedronGeometry args={[1, 0]} />
						<Mat color={palette.mint} />
					</mesh>
				))}
			</group>
			{/* chair */}
			<group position={[0.1, 0, 1.25]}>
				<mesh position={[0, 0.6, 0]}>
					<boxGeometry args={[0.8, 0.1, 0.7]} />
					<Mat color={palette.sun} />
				</mesh>
				<mesh position={[0, 1.05, 0.32]}>
					<boxGeometry args={[0.8, 0.8, 0.1]} />
					<Mat color={palette.sun} />
				</mesh>
				<mesh position={[0, 0.3, 0]}>
					<cylinderGeometry args={[0.05, 0.05, 0.6, 6]} />
					<Mat color={palette.ink} />
				</mesh>
			</group>
		</group>
	);
};

// ---------------------------------------------------------------- career stones
const Cap = () => (
	<group>
		<mesh position={[0, 0.1, 0]}>
			<cylinderGeometry args={[0.24, 0.26, 0.22, 8]} />
			<Mat color={palette.ink} />
		</mesh>
		<mesh position={[0, 0.24, 0]} rotation={[0, Math.PI / 4, 0]}>
			<boxGeometry args={[0.8, 0.06, 0.8]} />
			<Mat color={palette.ink} />
		</mesh>
		<mesh position={[0.32, 0.12, 0.32]}>
			<boxGeometry args={[0.03, 0.26, 0.03]} />
			<Mat color={palette.sun} />
		</mesh>
	</group>
);

const Flag = ({ color }) => {
	const flag = useRef();
	const still = useMemo(prefersStill, []);
	useFrame(({ clock }) => {
		if (!still) flag.current.rotation.y = Math.sin(clock.elapsedTime * 2.2) * 0.25;
	});
	return (
		<group>
			<mesh position={[0, 0.8, 0]}>
				<cylinderGeometry args={[0.03, 0.03, 1.6, 6]} />
				<Mat color={palette.white} />
			</mesh>
			<group ref={flag} position={[0, 1.38, 0]}>
				<mesh position={[0.36, 0, 0]}>
					<boxGeometry args={[0.7, 0.42, 0.03]} />
					<Mat color={color} />
				</mesh>
			</group>
		</group>
	);
};

const Snowflake = () => {
	const ref = useRef();
	const still = useMemo(prefersStill, []);
	useFrame((_, delta) => {
		if (!still) ref.current.rotation.y += delta * 0.8;
	});
	return (
		<group ref={ref} position={[0, 1.3, 0]}>
			{[0, 1, 2].map((i) => (
				<group key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
					<mesh>
						<boxGeometry args={[1.3, 0.09, 0.09]} />
						<Mat color={palette.white} />
					</mesh>
					{[-0.42, 0.42].map((x) => (
						<group key={x} position={[x, 0, 0]}>
							<mesh rotation={[0, 0, Math.PI / 4]} position={[x > 0 ? 0.06 : -0.06, 0.07, 0]}>
								<boxGeometry args={[0.28, 0.07, 0.07]} />
								<Mat color={palette.white} />
							</mesh>
							<mesh rotation={[0, 0, -Math.PI / 4]} position={[x > 0 ? 0.06 : -0.06, -0.07, 0]}>
								<boxGeometry args={[0.28, 0.07, 0.07]} />
								<Mat color={palette.white} />
							</mesh>
						</group>
					))}
				</group>
			))}
		</group>
	);
};

const Stones = () => (
	<>
		{STONES.map((pos, i) => {
			const item = career[i];
			const last = i === STONES.length - 1;
			return (
				<group key={item.id} position={pos}>
					<Island position={[0, 0, 0]} radius={1.5} top={item.kind === 'edu' ? palette.sun : palette.mint} />
					{item.kind === 'edu' ? <Cap /> : last ? <Snowflake /> : <Flag color={i === 2 ? palette.pink : palette.tomato} />}
				</group>
			);
		})}
	</>
);

// ---------------------------------------------------------------- projects wall
const Frame = ({ project, texture, position }) => {
	const router = useRouter();
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const still = useMemo(prefersStill, []);
	const phase = useMemo(() => Math.random() * Math.PI * 2, []);
	// Clicking navigates away before pointer-out fires, so reset the cursor on unmount
	useEffect(() => () => {
		document.body.style.cursor = '';
	}, []);

	useFrame(({ clock }, delta) => {
		const g = ref.current;
		if (!still) g.position.y = position[1] + Math.sin(clock.elapsedTime * 1.2 + phase) * 0.06;
		const s = THREE.MathUtils.damp(g.scale.x, hovered ? 1.08 : 1, 10, delta);
		g.scale.setScalar(s);
	});

	return (
		<group
			ref={ref}
			position={position}
			onClick={(e) => {
				e.stopPropagation();
				router.push(project.link);
			}}
			onPointerOver={(e) => {
				e.stopPropagation();
				setHovered(true);
				document.body.style.cursor = 'pointer';
			}}
			onPointerOut={() => {
				setHovered(false);
				document.body.style.cursor = '';
			}}
		>
			<mesh position={[0.08, -0.08, -0.08]}>
				<boxGeometry args={[2.5, 1.7, 0.1]} />
				<Mat color={palette.ink} />
			</mesh>
			<mesh>
				<boxGeometry args={[2.5, 1.7, 0.12]} />
				<Mat color={project.color} />
			</mesh>
			<mesh position={[0, 0, 0.065]}>
				<planeGeometry args={[2.3, 1.5]} />
				<meshBasicMaterial map={texture} toneMapped={false} />
			</mesh>
		</group>
	);
};

const Wall = () => {
	const textures = useTexture(projects.map((p) => p.thumb));
	const portrait = useThree((s) => s.size.width < s.size.height);
	useLayoutEffect(() => {
		textures.forEach((t) => {
			t.colorSpace = THREE.SRGBColorSpace;
		});
	}, [textures]);

	// Three across on landscape screens, two across on portrait ones
	const cols = portrait ? 2 : 3;
	const rows = Math.ceil(projects.length / cols);

	return (
		<group position={WALL}>
			<Island position={[0, 0, 0]} radius={4.5} top={palette.pink} />
			{projects.map((project, i) => {
				const c = i % cols;
				const r = Math.floor(i / cols);
				const x = (c - (cols - 1) / 2) * 2.8;
				const y = 3.6 + ((rows - 1) / 2 - r) * 2;
				return <Frame key={project.title} project={project} texture={textures[i]} position={[x, y, 0]} />;
			})}
		</group>
	);
};

// ---------------------------------------------------------------- skills tower
const Tower = () => {
	const ref = useRef();
	const still = useMemo(prefersStill, []);
	const blocks = useMemo(() => {
		const colors = [palette.tomato, palette.sun, palette.mint, palette.pink, palette.white];
		let y = 0;
		return Array.from({ length: 9 }, (_, i) => {
			const h = 0.45 + ((i * 37) % 5) * 0.08;
			const w = 1.9 - i * 0.12;
			const block = { y: y + h / 2, h, w, color: colors[i % colors.length], rot: i * 0.42 };
			y += h;
			return block;
		});
	}, []);

	useFrame(({ clock }) => {
		if (still) return;
		ref.current.children.forEach((b, i) => {
			b.rotation.y = blocks[i].rot + Math.sin(clock.elapsedTime * 0.6 + i * 0.5) * 0.12;
		});
	});

	return (
		<group position={TOWER}>
			<Island position={[0, 0, 0]} radius={3} top={palette.sun} />
			<group ref={ref}>
				{blocks.map((b, i) => (
					<mesh key={i} position={[0, b.y, 0]} rotation={[0, b.rot, 0]}>
						<boxGeometry args={[b.w, b.h, b.w]} />
						<Mat color={b.color} />
					</mesh>
				))}
			</group>
		</group>
	);
};

// ---------------------------------------------------------------- contact
const usePlaneGeometry = () =>
	useMemo(() => {
		// A paper plane: two wings folded from a central keel
		const v = new Float32Array([
			0, 0, 0.6, -0.45, 0.05, -0.4, 0, 0, -0.3,
			0, 0, 0.6, 0, 0, -0.3, 0.45, 0.05, -0.4,
			0, 0, 0.6, 0, -0.18, -0.35, 0, 0, -0.3
		]);
		const g = new THREE.BufferGeometry();
		g.setAttribute('position', new THREE.BufferAttribute(v, 3));
		g.computeVertexNormals();
		return g;
	}, []);

const Mailbox = () => {
	const plane = useRef();
	const geometry = usePlaneGeometry();
	const still = useMemo(prefersStill, []);

	useFrame(({ clock }) => {
		const t = still ? 1 : clock.elapsedTime * 0.7;
		const r = 2.3;
		plane.current.position.set(Math.cos(t) * r, 2.2 + Math.sin(t * 2) * 0.3, Math.sin(t) * r);
		// Face along the circle and bank into the turn
		plane.current.rotation.set(0, -t, -0.5);
	});

	return (
		<group position={MAILBOX}>
			<Island position={[0, 0, 0]} radius={2.8} />
			<mesh position={[0, 0.55, 0]}>
				<boxGeometry args={[0.14, 1.1, 0.14]} />
				<Mat color={palette.ink} />
			</mesh>
			<mesh position={[0, 1.3, 0]}>
				<boxGeometry args={[0.7, 0.45, 1]} />
				<Mat color={palette.tomato} />
			</mesh>
			<mesh position={[0, 1.52, 0]} rotation={[Math.PI / 2, 0, 0]}>
				<cylinderGeometry args={[0.35, 0.35, 1, 10, 1, false, 0, Math.PI]} />
				<Mat color={palette.tomato} side={THREE.DoubleSide} />
			</mesh>
			<mesh position={[0.38, 1.55, 0.2]}>
				<boxGeometry args={[0.03, 0.5, 0.05]} />
				<Mat color={palette.ink} />
			</mesh>
			<mesh position={[0.38, 1.75, 0.35]}>
				<boxGeometry args={[0.03, 0.18, 0.28]} />
				<Mat color={palette.sun} />
			</mesh>
			<group ref={plane}>
				<mesh geometry={geometry} rotation={[0, Math.PI / 2, 0]}>
					<Mat color={palette.white} side={THREE.DoubleSide} />
				</mesh>
			</group>
		</group>
	);
};

// ---------------------------------------------------------------- sky details
// All cloud puffs share one instanced mesh: a single draw call.
const Clouds = () => {
	const ref = useRef();
	const still = useMemo(prefersStill, []);
	const puffs = useMemo(() => {
		const list = [];
		const centres = [
			[-7, 5, -4], [8, 6, -2], [-3, 7, -14], [13, 5, -18], [0, 8, -26],
			[-24, 7, -28], [12, 7, -38], [-24, 6, -50], [2, 8, -52], [14, 6, -62], [-8, 6, -66], [6, 9, -72]
		];
		centres.forEach(([x, y, z], c) => {
			for (let i = 0; i < 4; i++) {
				list.push({ x: x + (i - 1.5) * 0.9, y: y + (i % 2) * 0.35, z: z + ((c + i) % 3) * 0.3, s: 0.7 + ((i * 7 + c) % 4) * 0.18 });
			}
		});
		return list;
	}, []);

	useLayoutEffect(() => {
		const m = new THREE.Matrix4();
		puffs.forEach((p, i) => {
			m.compose(new THREE.Vector3(p.x, p.y, p.z), new THREE.Quaternion(), new THREE.Vector3(p.s, p.s * 0.75, p.s));
			ref.current.setMatrixAt(i, m);
		});
		ref.current.instanceMatrix.needsUpdate = true;
	}, [puffs]);

	useFrame(({ clock }) => {
		if (!still) ref.current.position.x = Math.sin(clock.elapsedTime * 0.08) * 1.5;
	});

	return (
		<instancedMesh ref={ref} args={[null, null, puffs.length]}>
			<icosahedronGeometry args={[1, 1]} />
			<Mat color={palette.white} />
		</instancedMesh>
	);
};

// Dotted trail linking the islands, also a single instanced draw call.
const Trail = () => {
	const ref = useRef();
	const points = useMemo(() => {
		const curve = new THREE.CatmullRomCurve3(
			[DESK, ...STONES, WALL, TOWER, MAILBOX].map(([x, y, z]) => new THREE.Vector3(x, y + 0.15, z))
		);
		return curve.getSpacedPoints(180);
	}, []);

	useLayoutEffect(() => {
		const m = new THREE.Matrix4();
		points.forEach((p, i) => {
			m.makeTranslation(p.x, p.y, p.z);
			ref.current.setMatrixAt(i, m);
		});
		ref.current.instanceMatrix.needsUpdate = true;
	}, [points]);

	return (
		<instancedMesh ref={ref} args={[null, null, points.length]}>
			<sphereGeometry args={[0.07, 6, 6]} />
			<meshBasicMaterial color={palette.white} />
		</instancedMesh>
	);
};

const Sun = () => (
	<mesh position={[30, 26, -90]}>
		<circleGeometry args={[7, 32]} />
		<meshBasicMaterial color={palette.sun} fog={false} toneMapped={false} />
	</mesh>
);

export const Stations = () => (
	<>
		<Sun />
		<Clouds />
		<Trail />
		<Desk />
		<Stones />
		<React.Suspense fallback={null}>
			<Wall />
		</React.Suspense>
		<Tower />
		<Mailbox />
	</>
);
