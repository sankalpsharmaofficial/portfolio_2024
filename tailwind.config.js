/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
			},
			colors: {
				ink: {
					DEFAULT: 'var(--ink)',
					2: 'var(--ink-2)'
				},
				tomato: 'var(--tomato)',
				sun: 'var(--sun)',
				mint: 'var(--mint)',
				pink: 'var(--pink)'
			}
		}
	},
	plugins: []
};
