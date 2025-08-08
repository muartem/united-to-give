import AttendImage from '@/assets/images/attend.png'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul.jsx'
import Image from 'next/image'

const MainAttend = () => {
  return (
    <Container
      outerCls="bg-background"
      innerCls="grid grid-cols-1 md:grid-cols-2 md:gap-20 xl:gap-20 md:justify-between"
    >
      <Image src={AttendImage} alt="Attend" width={592} height={487}
        className="order-2 md:order-1 w-auto h-auto object-cover rounded-xl md:rounded-3xl"
      />
      <div className="order-1 md:order-2 flex flex-col gap-4">
        <div className="h2 uppercase text-light-black mb-2">
          Attend Charity Event
        </div>
        {/*<div className="b2 font-bold text-primary">
						17 of May
          </div>
          <div className="b3 text-black-text">
						📍 Location: Sheraton Centre Toronto Hotel, 123 Queen St W, Toronto, ON M5H 2M9
          </div>*/}
        <div className="b1 text-black-text">
          If you want to join the event, but have not donated blood - you are welcome too! Attend Charity Event - all
          ticket sales and financial donations go to Ukraine.
        </div>
        <Ul
          variant="star"
          lis={[
            'One of the biggest charity Ukrainian parties in Toronto',
            'Networking opportunities with Ukrainian and Canadian-Ukrainian business owners, partners and bloggers',
            'Listen to famous speakers',
            'Make business connections and give away job applications'
          ]}
        />
        <Button disabled variant="event" classNames="invisible w-full mt-4">Soon...{/*Attend Event*/}</Button>
      </div>
    </Container>
  )
}

export default MainAttend

