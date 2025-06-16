const Card = ({
	classNames,
	children,
}) => {
	return (
		<div
			className={`w-full p-10 b2 text-black-text flex flex-col bg-card-bg rounded-b-xl md:rounded-b-3xl ${classNames}`}
		>
			{children}
		</div>
	)
}

export default Card
