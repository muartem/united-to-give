import FAQ from '@/components/templates/Partner/FAQ'
import GoodTeam from '@/components/templates/Partner/GoodTeam'
import HaveQuestions from '@/components/templates/Partner/HaveQuestions'
import Money from '@/components/templates/Partner/Money'
import Packages from '@/components/templates/Partner/Packages'
import PartnerMain from '@/components/templates/Partner/PartnerMain'
import Partners from '@/components/templates/Partner/Partners'

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
