import * as React from 'react'

const SVGComponent = (props) => (
	<svg
		width={49}
		height={48}
		viewBox="0 0 49 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect x={0.836} y={0.5} width={47.667} height={47} rx={23.5}/>
		<rect
			x={0.836}
			y={0.5}
			width={47.667}
			height={47}
			rx={23.5}
			stroke="#C5161D"
		/>
		<path
			d="M16.336 24h16.667"
			stroke="#C5161D"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
export default SVGComponent
