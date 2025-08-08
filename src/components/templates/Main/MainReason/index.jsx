import Needs1 from '@/assets/images/needs1.png'
import Needs2 from '@/assets/images/needs2.png'
import Needs3 from '@/assets/images/needs3.png'
import Needs4 from '@/assets/images/needs4.png'
import BloodIcon from '@/assets/images/icons/blood-droplet.svg'
import Image from 'next/image'
import Button from '@/components/ui/button'

const MainReason = () => {
  return (
    <div className="w-dvw bg-[#F5F5F5] text-light-black mb-16 py-16 px-6 lg:px-28">
      <div className="max-w-screen-xl m-auto h-full flex justify-between gap-20 flex-col lg:flex-row">
        <div className="flex-1">
          <div className="h1 uppercase text-[#222222] tracking-[-0.02em] mb-8">
						Be the <span className="text-[#C5161D]">Reason</span> Someone Sees <span className="text-[#C5161D]">Tomorrow</span>.
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex-1">
              <Image src={Needs1} alt="Needs" width={136} height={221} className="object-contain rounded-2xl" />
              <div className="b3 text-[#222222] mt-4">
								Children with Cancer
              </div>
            </div>
            <div className="flex-1">
              <Image src={Needs2} alt="Needs" width={136} height={221} className="object-contain rounded-2xl" />
              <div className="b3 text-[#222222] mt-4">
								People Injured in Car Crashes or Accidents
              </div>
            </div>
            <div className="flex-1">
              <Image src={Needs3} alt="Needs" width={136} height={221} className="object-contain rounded-2xl" />
              <div className="b3 text-[#222222] mt-4">
								Patients with Chronic Illnesses
              </div>
            </div>
            <div className="flex-1">
              <Image src={Needs4} alt="Needs" width={136} height={221} className="object-contain rounded-2xl" />
              <div className="b3 text-[#222222] mt-4">
								Mothers in Complicated Births
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="h2 uppercase text-[#222222] tracking-[-0.02em] mb-2">
						Donate when it works for you
          </div>
          <div className="text-lg font-normal leading-[21px] tracking-[0.02em] text-[#C5161D] mb-2">
						Available: May 15 - June 15
          </div>
          <div className="text-[16px] font-normal leading-[140%] tracking-[0.02em] text-[#464646] mb-10">
						📍 Location: Any Canadian Blood Services location in Toronto
          </div>
          <div className="b1 text-[#464646] mb-4">
						Your schedule. Your impact. One simple act that saves lives.
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-2">
            <Image src={BloodIcon} alt="Check" width={15} height={24} />
						Receive a digital certificate of appreciation
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-2">
            <Image src={BloodIcon} alt="Check" width={15} height={24} />
						Get a free ticket to our charity event in Toronto
          </div>
          <div className="flex items-center gap-2 b2 text-[#464646] mb-2">
            <Image src={BloodIcon} alt="Check" width={15} height={24} />
						Join our Telegram group for easy reminders, support & next steps
          </div>
          <div className="b2 text-[#464646] mb-10">
						*Before registering, please, check your donation eligibility.
          </div>
          <div className="mb-4">
            <Button classNames="w-full">Donate Blood</Button>
          </div>
          <div className="b3 text-[#464646]">
						For more information or to book an appointment, visit blood.ca or call 1 888 2 DONATE (1-888-236-6283).
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainReason

