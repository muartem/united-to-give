import * as React from 'react'

const SVGComponent = ({color, ...props}) => (
	<svg
		width={14}
		height={14}
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<path
			d="M1.164 12.833 6.997 7m0 0 5.834-5.833M6.997 7l5.834 5.833M6.997 7 1.164 1.167"
			stroke={color || "#000"}
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)
export default SVGComponent
