const Button = ({
  classNames,
  onClick,
  variant = 'primary',
  children,
  customPX = false,
  disabled = false
}) => {
  return (
    <button
      className={`
      	py-2.5 rounded-xl md:rounded-full text-lg tracking-[0.02em] leading-[21px]
        b2 font-semibold
        disabled:brightness-90
				${customPX ? '' : 'px-3.5'}
        ${variant === 'primary' ? 'bg-primary text-white not-dis [&:not(:disabled):hover]:bg-dark-primary' : ''}
        ${variant === 'event' ? 'bg-golden-yellow text-light-black [&:not(:disabled):hover]:brightness-110' : ''}
        ${variant === 'secondary' ? 'bg-transparent text-primary border-2 border-primary [&:not(:disabled):hover]:border-dark-primary [&:not(:disabled):hover]:text-dark-primary' : ''}
        ${classNames}
      `}
      onClick={onClick}
      aria-label={children}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
