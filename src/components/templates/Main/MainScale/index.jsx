import CbsLogo from '@/assets/images/partners/cbs.svg'
import UtLogo from '@/assets/images/partners/ut.svg'
import Container from '@/components/ui/container'
import Image from 'next/image'

const MainScale = () => {
  return (
    <Container
      outerCls="bg-background"
      innerCls="relative text-center md:text-left gap"
    >
      <h2 className="uppercase text-light-black text-center">
				Scale of the Initiative
      </h2>
      <div>
        <div className="b1 text-light-black text-center mb-2">
					📅 Duration: 6 months
        </div>
        <div className="b1 text-light-black text-center">
					👥 Target: Engage thousands of donors across Canada
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="flex-1">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-8">
            <Image src={CbsLogo} alt="Hero background" width={236} height={48}/>
          </div>
          <div className="b2 font-bold mb-2">Location</div>
          <div className="b2 text-black-text">
						Launch in Toronto with expansion to other cities across Canada.
          </div>
        </div>
        <div className="flex-1">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-8">
            <Image src={UtLogo} alt="Hero background" width={90} height={94}/>
          </div>
          <div className="b2 font-bold mb-2">Connections</div>
          <div className="b2 text-black-text">
						Partnerships with volunteer organizations, businesses, business clubs, bloggers, media, and faith groups.
          </div>
        </div>
        <div className="flex-1">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-8">
            <Image src={CbsLogo} alt="Hero background" width={236} height={48}/>
          </div>
          <div className="b2 font-bold mb-2">Community</div>
          <div className="b2 text-black-text">
						Nationwide outreach to the Ukrainian diaspora, with a focus on engaging local communities.
          </div>
        </div>
        <div className="flex-1">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-8">
            <Image src={CbsLogo} alt="Hero background" width={236} height={48}/>
          </div>
          <div className="b2 font-bold mb-2">Vision</div>
          <div className="b2 text-black-text">
						Combination of local events and national campaigns.
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MainScale
