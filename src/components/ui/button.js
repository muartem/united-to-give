const Button = ({
	classNames,
	onClick,
	variant = 'primary',
	children,
	customPX = false
}) => {
	return (
		<button
			className={`
      	py-2.5 rounded-xl md:rounded-full text-lg tracking-[0.02em] leading-[21px]
        b2 font-semibold
				${customPX ? '' : 'px-3.5'}
        ${variant === 'primary' ? 'bg-primary text-white hover:bg-dark-primary' : ''}
        ${variant === 'secondary' ? 'bg-white text-primary border-2 border-primary hover:border-dark-primary hover:text-dark-primary' : ''}
        ${classNames}
      `}
			onClick={onClick}
			aria-label={children}
		>
			{children}
		</button>
	)
}

export default Button
