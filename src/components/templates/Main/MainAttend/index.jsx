import StarIcon from '@/assets/images/icons/star.svg'
import AttendImage from '@/assets/images/attend.jpg'
import Image from 'next/image'
import Button from '@/components/ui/button'

const MainAttend = () => {
  return (
    <div className="w-dvw text-light-black mb-0 lg:mb-16 py-16 px-6 xl:px-28">
      <div className="max-w-screen-xl m-auto h-full flex justify-between items-center lg:items-start gap-20 flex-col lg:flex-row">
        <div className="flex-1">
          <Image src={AttendImage} alt="Attend" width={592} height={487} className="object-cover rounded-2xl" />
        </div>
        <div className="flex-1">
          <div className="h2 uppercase text-[#222222] tracking-[-0.02em] mb-2">
						Attend Charity Event
          </div>
          <div className="text-lg font-normal leading-[21px] tracking-[0.02em] text-[#EC0F16] mb-2">
						17 of May
          </div>
          <div className="b3 text-[#464646] mb-10">
						📍 Location: Sheraton Centre Toronto Hotel, 123 Queen St W, Toronto, ON M5H 2M9
          </div>
          <div className="b1 text-[#464646] mb-4">
						If you want to join the event, but have not donated blood - you are welcome too! Attend Charity Event - all ticket sales and financial donations go to Ukraine.
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-2">
            <Image src={StarIcon} alt="Check" width={24} height={24} />
						One of the biggest charity Ukrainian parties in Toronto
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-2">
            <Image src={StarIcon} alt="Check" width={24} height={24} />
						Networking opportunities with Ukrainian and Canadian-Ukrainian business owners, partners and bloggers.
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-2">
            <Image src={StarIcon} alt="Check" width={24} height={24} />
						Listen to famous speakers
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-10">
            <Image src={StarIcon} alt="Check" width={24} height={24} />
						Make business connections and give away job applications
          </div>
          <div className="mb-4">
            <Button classNames="w-full bg-[#FFD56B] hover:bg-[#FFD56B]/80">Attend Event</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAttend

