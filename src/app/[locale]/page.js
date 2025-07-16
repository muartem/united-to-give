import BeReason from '@/components/templates/common/BeReason'
import MainAttend from '@/components/templates/Main/MainAttend'
import MainEvent from '@/components/templates/Main/MainEvent'
import MainGoals from '@/components/templates/Main/MainGoals'
import MainHero from '@/components/templates/Main/MainHero'
import MainMentioned from '@/components/templates/Main/MainMentioned'
import MainPartners from '@/components/templates/Main/MainPartners'
import MainScale from '@/components/templates/Main/MainScale'
import MainTeam from '@/components/templates/Main/MainTeam'
import MainWhatIs from '@/components/templates/Main/MainWhatIs'
import BecomeAPartner from '@/components/templates/Main/BecomeAPartner'

export default async function Home() {
	return (
		<>
			<MainHero/>
			<MainPartners/>
			<MainGoals/>
			<MainWhatIs/>
			<MainScale/>
			<BecomeAPartner/>
			<MainMentioned/>
			<BeReason/>
			<MainEvent/>
			<MainAttend/>
			<MainTeam/>
		</>
	)
}
