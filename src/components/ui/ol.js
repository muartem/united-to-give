const Ol = ({
	classNames,
	lis,
}) => {
	return (
		<ul className={`b2 flex flex-col gap-2 [&>li]:flex [&>li]:gap-4 ${classNames}`}>
			{lis.map((li, i) => (
				<li key={li}>
					<span className="text-primary font-bold">{i+1}.</span>
					{li}
				</li>
			))}
		</ul>
	)
}

export default Ol
