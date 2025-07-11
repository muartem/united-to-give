import * as React from 'react'

const SVGComponent = (props) => (
	<svg
		width={40}
		height={40}
		viewBox="0 0 40 40"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="m26.664 16.667-6.667 6.667-6.666-6.667"
			stroke="#fff"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default SVGComponent
