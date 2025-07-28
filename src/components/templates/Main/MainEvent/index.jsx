import EventBg from '@/assets/images/event-bg.jpg'
import GentlemenImage from '@/assets/images/gentlemen.png'
/*import ArrowRight from '@/assets/svg/Arrow-right'*/
import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul'
import Image from 'next/image'

const MainEvent = () => {
  return (
    <Container
      outerCls="bg-background"
      innerCls="relative rounded-0 md:rounded-3xl bg-[#F5F5F5] overflow-hidden"
    >
      <Image src={EventBg} alt="Hero background" className="absolute w-full h-full object-cover"/>
      <div className="relative z-10 flex items-center flex-col lg:flex-row">
        <div className="flex flex-col justify-center gap-4 flex-1 pl-6 md:pl-20 pr-6 md:pr-0 py-4 md:py-16 ">
          <h3 className="h3 text-light-black uppercase">Already donated Blood?</h3>
          <h2 className="h2 text-light-black mb-4 uppercase">
						Get <span className="text-golden-yellow">free ticket</span> to charity event!
          </h2>
          <Ul
            variant="star"
            lis={['Free entrance for blood donors', '100% of tickets sales go to Ukrainian hospitals']}
          />
          {/*<button
            type="button"
            className="mt-4 mb-8 b2 font-bold text-golden-yellow flex items-center gap-2 hover:brightness-95"
          >
						Get my ticket
            <ArrowRight color="#FFC75F"/>
          </button>
          <div className="flex items-center gap-[53px]">
            <div className="border-l-4 border-golden-yellow pl-4">
              <div className="b3 uppercase text-light-black">
								NAME SURNAME
              </div>
              <div className="b3 text-logo-gray">
								Volunteer
              </div>
            </div>
            <div className="border-l-4 border-golden-yellow pl-4">
              <div className="b3 uppercase text-light-black">
								NAME SURNAME
              </div>
              <div className="b3 text-logo-gray">
								Volunteer
              </div>
            </div>
            <div className="border-l-4 border-golden-yellow pl-4">
              <div className="b3 uppercase text-light-black">
								NAME SURNAME
              </div>
              <div className="b3 text-logo-gray">
								Volunteer
              </div>
            </div>
          </div>*/}
        </div>
        <Image src={GentlemenImage} alt="Gentlemen" width={608} height={479} className="object-cover"/>
      </div>
    </Container>
  )
}

export default MainEvent
