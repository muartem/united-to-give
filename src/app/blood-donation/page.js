import BeReason from '@/components/templates/common/BeReason/index.jsx'
import DonateOnes from '@/components/templates/Blood/DonateOnes/index.jsx'
import DonateTogether from '@/components/templates/Blood/DonateTogether/index.jsx'
import FAQ from '@/components/templates/Blood/FAQ/index.jsx'
import HowDonate from '@/components/templates/Blood/HowDonate/index.jsx'
import BloodMain from '@/components/templates/Blood/BloodMain/index.jsx'
import Numbers from '@/components/templates/Blood/Numbers/index.jsx'
import OtherWays from '@/components/templates/Blood/OtherWays/index.jsx'
import Video from '@/components/templates/Blood/Video/index.jsx'

export default async function BloodDonationPage() {
  return (
    <>
      <BloodMain/>
      <Numbers/>
      <Video/>
      <BeReason/>
      <DonateTogether/>
      <HowDonate />
      <FAQ />
      <DonateOnes />
      <OtherWays />
    </>
  )
}
