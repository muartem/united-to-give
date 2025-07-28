const config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			screens: {
				'xs': '380px',
			},
			colors: {
				background: 'var(--color-bg)',
				primary: 'var(--color-primary)',
				'dark-primary': 'var(--color-dark-primary)',
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
			backgroundImage: {
				'main-gradient': `linear-gradient(
          180deg,
          #e7e7e7 0%,
          #e6e6e6 19%,
          #dcdcdc 51%,
          #d6d6d6 65%,
          #d1d1d1 85%,
          #d0d0d0 100%
        )`,
				'bw-gradient': `linear-gradient(
          90deg,
          #e7e7e7 50%,
          #363B42 50%
        )`,
				'pay-gradient': `linear-gradient(
          90deg,
          #F5F5F5 60%,
          #FFFAFE 40%
        )`,
			},
		},
	},
	plugins: [],

}

export default config
