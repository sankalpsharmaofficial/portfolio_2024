/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace']
			},
			colors: {
				dark: {
					primary: '#0a0a0f',
					secondary: '#12121a',
					card: 'rgba(255, 255, 255, 0.03)'
				},
				accent: {
					cyan: '#00d4ff',
					violet: '#7c3aed',
					pink: '#ec4899',
					emerald: '#10b981'
				}
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.1)' },
					'50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.2)' }
				}
			},
			backdropBlur: {
				xs: '2px'
			}
		}
	},
	plugins: []
};
