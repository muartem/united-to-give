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
				background: 'var(--background)',
				foreground: 'var(--foreground)',
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