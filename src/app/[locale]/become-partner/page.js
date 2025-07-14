import FAQ from '@/components/templates/Partner/FAQ'
import GoodTeam from '@/components/templates/Partner/GoodTeam'
import Packages from '@/components/templates/Partner/Packages'
import PartnerMain from '@/components/templates/Partner/PartnerMain'

export default async function BloodDonationPage() {
	return (
		<>
			<PartnerMain />
			<GoodTeam />
			<Packages />
			<FAQ />
		</>
	)
}
