import {gray} from 'next/dist/lib/picocolors'

const config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'1440': '1440px',
			},
			colors: {
				background: 'var(--color-bg)',
				primary: 'var(--color-primary)',
				'light-gray': 'var(--color-light-gray)',
				'mid-gray': 'var(--color-mid-gray)',
				'dark-gray': 'var(--color-dark-gray)',
				'logo-gray': 'var(--color-logo-gray)',
				'black-text': 'var(--color-black-text)',
				'light-black': 'var(--color-light-black)',
				'mid-link': 'var(--color-link)',
				'golden-yellow': 'var(--color-golden-yellow)',
				'card-bg': 'var(--color-card-bg)',
			},
			animation: {
				scroll:
					'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
			},
			keyframes: {
				scroll: {
					to: {
						transform: 'translate(calc(-50% - 0.5rem))',
					},
				},
			},
			boxShadow: {
				yellow: '0px 4px 4px 0px rgba(218, 192, 144, 0.12)',
			},
			transitionProperty: {
				spacing: 'padding-left',
			},
		},
	},
	plugins: [],

}

export default config