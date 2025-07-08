import GroupDonation from '@/components/templates/GroupDonation'
import MainHero from '@/components/templates/MainHero'
import MainPartners from '@/components/templates/MainPartners'
import Numbers from '@/components/templates/Numbers'
import Video from '@/components/templates/Video'
import MainGoals from '@/components/templates/MainGoals'
import MainWhatIs from '@/components/templates/MainWhatIs'
import WhoNeeds from '@/components/modules/WhoNeeds'
import MainScale from '@/components/templates/MainScale'
import BecomeAPartner from '@/components/templates/BecomeAPartner'
import MainMentioned from '@/components/templates/MainMentioned'
import MainReason from '@/components/templates/MainReason'
import MainEvent from '@/components/templates/MainEvent'
import MainAttend from '@/components/templates/MainAttend'
import MainTeam from '@/components/templates/MainTeam'

export default async function Home() {
	return (
		<>
			<MainHero />
			<MainPartners />
			{/* <Numbers /> */}
			<MainGoals />
			<MainWhatIs />
			<MainScale />
			<BecomeAPartner />
			<MainMentioned />
			<MainReason />
			<MainEvent />
			<MainAttend />
			<MainTeam />
			{/* <Video /> */}
			{/* <WhoNeeds /> */}
			{/* <GroupDonation /> */}
		</>
	)
}
