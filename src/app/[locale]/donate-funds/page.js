import FundsMain from '@/components/templates/Funds/FundsMain'
import Numbers from '@/components/templates/Funds/Numbers'
import WhereGoes from '@/components/templates/Funds/WhereGoes'


export default async function DonateFundsPage() {
	return (
		<>
			<FundsMain/>
			<Numbers/>
			<WhereGoes/>
		</>
	)
}
