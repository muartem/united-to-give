import * as React from 'react'

const SVGComponent = (props) => (
	<svg
		width={23}
		height={15}
		viewBox="0 0 23 15"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M22.707 8.207a1 1 0 0 0 0-1.414L16.343.429a1 1 0 1 0-1.414 1.414L20.586 7.5l-5.657 5.657a1 1 0 0 0 1.414 1.414zM0 7.5v1h22v-2H0z"
			fill="#C5161D"
		/>
	</svg>
)

export default SVGComponent
