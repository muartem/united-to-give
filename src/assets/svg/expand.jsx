import * as React from 'react'

const SVGComponent = (props) => (
	<svg
		width={48}
		height={48}
		viewBox="0 0 48 48"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect x={0.5} y={0.5} width={47} height={47} rx={23.5} fill="#C5161D"/>
		<rect x={0.5} y={0.5} width={47} height={47} rx={23.5} stroke="#C5161D"/>
		<path
			d="M16 24h16m-8-8v16"
			stroke="#FFFAFE"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
export default SVGComponent
