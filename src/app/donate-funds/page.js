import FundsMain from '@/components/templates/Funds/FundsMain/index.jsx'
import Numbers from '@/components/templates/Funds/Numbers/index.jsx'
import SeeImpact from '@/components/templates/Funds/SeeImpact/index.jsx'
import UTHR from '@/components/templates/Funds/UTHR/index.jsx'
import WhereGoes from '@/components/templates/Funds/WhereGoes/index.jsx'
import WhyTrust from '@/components/templates/Funds/WhyTrust/index.jsx'


export default async function DonateFundsPage() {
  return (
    <>
      <FundsMain/>
      <Numbers/>
      <WhereGoes/>
      <WhyTrust/>
      <SeeImpact/>
      <UTHR/>
    </>
  )
}
