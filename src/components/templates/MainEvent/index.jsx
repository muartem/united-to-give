import GentlemenImage from '@/assets/images/gentlemen.png'
import EventBg from '@/assets/images/event-bg.jpg'
import ArrowIcon from '@/assets/images/icons/link-arrow.svg'
import Image from 'next/image'
import BloodIcon from '@/assets/images/icons/blood-droplet.svg'

const MainEvent = () => {
	return (
		<div className="w-dvw mb-16 px-28">
			<div className="relative max-w-screen-xl m-auto border-[#CFCFD0] rounded-3xl border-2 bg-[#F5F5F5] overflow-hidden">
				<Image src={EventBg} alt="Hero background" className="absolute top-0 right-0 bottom-0 left-0 object-cover" />
				<div className="pl-20 relative z-10 flex items-center">
					<div className="flex-1">
						<div className="h3 text-[#222222] mb-4 leading-[21px] uppercase">Already donated Blood?</div>
						<div className="h2 text-[#464646] mb-10 uppercase">
							Get <span className="text-[#FFC75F]">free ticket</span> to charity event!
						</div>
						<div className="flex items-center gap-2 mb-2">
							<Image src={BloodIcon} alt="Blood" width={15} height={24} />
							<div className="b2 text-[#464646]">
								Free entrance for blood donors
							</div>
						</div>
						<div className="flex items-center gap-2 mb-8">
							<Image src={BloodIcon} alt="Blood" width={15} height={24} />
							<div className="b2 text-[#464646]">
								100% of tickets sales go to Ukrainian hospitals
							</div>
						</div>
						<div className="mb-[73px]">
							<button type="button" className="text-lg font-bold tracking-[0.02em] text-[#C5161D] mb-2 leading-[21px] flex items-center gap-2">
								Get my ticket
								<Image src={ArrowIcon} alt="Arrow" width={22} height={16} />
							</button>
						</div>
						<div className="flex items-center gap-[53px]">
							<div className="border-l-4 border-[#FFC75F] pl-4">
								<div className="b3 text-[#222222]">
									NAME SURNAME
								</div>
								<div className="b3 text-[#464646]">
									Volunteer
								</div>
							</div>
							<div className="border-l-4 border-[#FFC75F] pl-4">
								<div className="b3 text-[#222222]">
									NAME SURNAME
								</div>
								<div className="b3 text-[#464646]">
									Volunteer
								</div>
							</div>
							<div className="border-l-4 border-[#FFC75F] pl-4">
								<div className="b3 text-[#222222]">
									NAME SURNAME
								</div>
								<div className="b3 text-[#464646]">
									Volunteer
								</div>
							</div>
						</div>
					</div>
					<div className="">
						<Image src={GentlemenImage} alt="Gentlemen" width={608} height={479} className="object-cover" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainEvent;
