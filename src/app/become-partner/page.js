import FAQ from '@/components/templates/Partner/FAQ/index.jsx'
import GoodTeam from '@/components/templates/Partner/GoodTeam/index.jsx'
import HaveQuestions from '@/components/templates/Partner/HaveQuestions/index.jsx'
import Money from '@/components/templates/Partner/Money/index.jsx'
import Packages from '@/components/templates/Partner/Packages/index.jsx'
import PartnerMain from '@/components/templates/Partner/PartnerMain/index.jsx'
import Partners from '@/components/templates/Partner/Partners/index.jsx'

export default async function BloodDonationPage() {
  return (
    <>
      <PartnerMain />
      <GoodTeam />
      <Packages />
      <FAQ />
      <Partners />
      <Money />
      <HaveQuestions />
    </>
  )
}
