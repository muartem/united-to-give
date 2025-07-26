import BeReason from '@/components/templates/common/BeReason/index.jsx'
import MainAttend from '@/components/templates/Main/MainAttend/index.jsx'
import MainEvent from '@/components/templates/Main/MainEvent/index.jsx'
import MainGoals from '@/components/templates/Main/MainGoals/index.jsx'
import MainHero from '@/components/templates/Main/MainHero/index.jsx'
import MainMentioned from '@/components/templates/Main/MainMentioned/index.jsx'
import MainPartners from '@/components/templates/Main/MainPartners/index.jsx'
import MainScale from '@/components/templates/Main/MainScale/index.jsx'
import MainTeam from '@/components/templates/Main/MainTeam/index.jsx'
import MainWhatIs from '@/components/templates/Main/MainWhatIs/index.jsx'
import BecomeAPartner from '@/components/templates/Main/BecomeAPartner/index.jsx'

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
