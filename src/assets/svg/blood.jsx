import * as React from 'react'

const SVGComponent = (props) => (
	<svg
		width={15}
		height={25}
		viewBox="0 0 15 25"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M1.03 13.775 7.5.535l6.471 13.243A6.85 6.85 0 0 1 15 17.391c0 3.945-3.358 7.143-7.5 7.143S0 21.336 0 17.391c0-1.32.376-2.555 1.03-3.616"
			fill="#C5161D"
		/>
	</svg>
)

export default SVGComponent
