const Button = ({
	classNames,
	onClick,
	variant = 'primary',
	children,
}) => {
	return (
		<button
			className={`
        p-3.5 rounded-xl md:rounded-full
        b2 font-semibold
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
