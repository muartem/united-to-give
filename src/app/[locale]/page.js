import MainHero from '@/components/templates/MainHero'
import MainPartners from '@/components/templates/MainPartners'
import MainGoals from '@/components/templates/MainGoals'
import MainWhatIs from '@/components/templates/MainWhatIs'
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
			<MainGoals />
			<MainWhatIs />
			<MainScale />
			<BecomeAPartner />
			<MainMentioned />
			<MainReason />
			<MainEvent />
			<MainAttend />
			<MainTeam />
		</>
	)
}
