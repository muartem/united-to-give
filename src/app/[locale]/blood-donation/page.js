import BeReason from '@/components/templates/BeReason'
import DonateOnes from '@/components/templates/DonateOnes'
import DonateTogether from '@/components/templates/DonateTogether'
import FAQ from '@/components/templates/FAQ'
import HowDonate from '@/components/templates/HowDonate'
import Main from '@/components/templates/Main'
import Numbers from '@/components/templates/Numbers'
import OtherWays from '@/components/templates/OtherWays'
import Video from '@/components/templates/Video'

export default async function BloodDonationPage() {
	return (
		<>
			<Main/>
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
