import Blood from '@/assets/svg/blood'

const BloodUl = ({
	classNames,
	lis,
}) => {
	return (
		<ul className={`b2 list-none [&>li]:flex [&>li]:gap-6 ${classNames}`}>
			{lis.map(li => (<li key={li}><Blood/>{li}</li>))}
		</ul>
	)
}

export default BloodUl
