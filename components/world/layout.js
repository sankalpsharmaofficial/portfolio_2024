// Where everything sits in the 3D world, and where the camera goes for each
// "stop" of the page. One stop per full-screen block of text in the overlay.

export const DESK = [0, 0, 0];

// Career stepping stones climb and zigzag away from the desk
export const STONES = [0, 1, 2, 3, 4].map((i) => [i % 2 === 0 ? 4 : 8, 0.4 + i * 0.9, -10 - i * 5]);

export const WALL = [-12, 0, -46];
export const TOWER = [6, 0, -54];
export const MAILBOX = [0, 0, -66];

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];

// Each stop: where the camera sits, where it looks, and the point of interest
// (used to reframe the shot on portrait screens, optionally tuned per stop).
export const STOPS = [
	{ id: 'home', pos: [3.6, 3.4, 7.6], target: [-2.7, 1.3, 0], focus: [0, 1.4, 0] },
	...STONES.map((s, i) => ({
		id: i === 0 ? 'career' : `career-${i}`,
		pos: add(s, [2.6, 2.6, 6.5]),
		target: add(s, [-1.9, 0.8, 0]),
		focus: add(s, [0, 0.9, 0])
	})),
	{ id: 'projects', pos: [-15.5, 4.4, -32.5], target: [-14.2, 3.4, -46], focus: [-12, 3.6, -46], portrait: { pull: 2, lift: 0.08 } },
	{ id: 'about', pos: [-1, 3.6, -43.5], target: [3.4, 2.4, -54], focus: [6, 2.4, -54] },
	{ id: 'skills', pos: [15, 5, -44], target: [3.6, 2.4, -55.5], focus: [6, 2.6, -54] },
	{ id: 'contact', pos: [4.2, 2.8, -59], target: [-1.7, 1.2, -66], focus: [0, 1.4, -66] }
];

// Document-space centre of each overlay stop, filled in by the overlay on
// mount and resize so the camera rig never has to measure the DOM per frame.
export const stopCenters = { values: [] };
