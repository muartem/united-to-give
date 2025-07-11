import BeReason from '@/components/templates/Blood/BeReason'
import DonateOnes from '@/components/templates/Blood/DonateOnes'
import DonateTogether from '@/components/templates/Blood/DonateTogether'
import FAQ from '@/components/templates/Blood/FAQ'
import HowDonate from '@/components/templates/Blood/HowDonate'
import BloodMain from '@/components/templates/Blood/BloodMain'
import Numbers from '@/components/templates/Blood/Numbers'
import OtherWays from '@/components/templates/Blood/OtherWays'
import Video from '@/components/templates/Blood/Video'

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
