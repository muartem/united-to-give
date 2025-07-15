import HeroBg from '@/assets/images/hero-bg.jpg'
import Image from 'next/image'

const MainHero = () => {
	return (
		<div className="w-dvw bg-main-gradient text-light-black mb-10 px-4 md:px-8 lg:px-28">
			<div className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left flex-col md:flex-row">
				<div className="flex flex-col w-auto md:w-[50%] justify-between pt-16 px-6 xl:px-16 pb-12 md:pb-0">
					<div>
						<h1 className="text-6xl font-normal leading-[120%] tracking-[-0.02em] uppercase text-[#222222] mb-[2px]">
							Join the <span className="text-[#C5161D]">Blood Donation</span> Initiative
						</h1>
						<div className="text-lg font-normal leading-[140%] text-[#464646] mb-6 md:mb-4">
							Donate once - save three lives anytime between <span className="text-[#C5161D]">April 20 to May 10</span>. Help in the way you can.
						</div>
					</div>
					<div>
						<div className="mb-4 md:mb-12">
							<button className="bg-[#C5161D] rounded-3xl px-16 py-4 text-sm font-bold leading-[18px] text-white tracking-[0.02em]">
								Donate Blood
							</button>
						</div>
						<div className="flex gap-4 md:gap-10 md:h-[190px] h-auto flex-col md:flex-row">
							<div className="flex-1">
								<div className="text-[32px] font-bold leading-[140%] text-[#C5161D] mb-2">
									1000+
								</div>
								<div className="text-lg font-normal leading-[140%] text-[#464646]">
									Our goal is to attract a thousand of new donors in Toronto.
								</div>
							</div>
							<div className="flex-1">
								<div className="text-[32px] font-bold leading-[140%] text-[#C5161D] mb-2">
									$5,000
								</div>
								<div className="text-lg font-normal leading-[140%] text-[#464646]">
									Collect funds that will be sent to support Ukrainian blood center
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-auto md:w-[50%] relative pb-12 md:pb-0">
					<Image src={HeroBg} alt="Hero background" width={568} height={568} className="w-full h-full object-cover object-center absolute top-0 right-0" />
					<div className="flex flex-col pt-16 px-6 xl:px-16 relative z-10">
						<h2 className="text-6xl font-normal leading-[120%] tracking-[-0.02em] uppercase text-white mb-[2px]">
							<span className="text-[#C5161D]">Attend</span> charity networking event
						</h2>
						<div className="text-lg font-normal leading-[140%] text-white md:mb-[107px] mb-6 w-[100%]">
							Made by Ukrainians, for Ukrainians and friends. No need to hesitate - you know our quality and taste. You're going to love it.
						</div>
						<div className="mb-4 md:mb-12">
							<button className="bg-[#FFD56A] rounded-3xl px-16 py-4 text-sm font-bold leading-[18px] text-[#222222] tracking-[0.02em]">
								Attend Event
							</button>
						</div>
						<div className="flex gap-4 md:gap-10 md:h-[190px] h-auto flex-col md:flex-row">
							<div className="flex-1">
								<div className="text-[32px] font-bold leading-[140%] text-[#FFD56A] mb-2">
									3 speakers
								</div>
								<div className="text-lg font-normal leading-[140%] text-white">
									People you all know will share their experiences in Canada.
								</div>
							</div>
							<div className="flex-1">
								<div className="text-[32px] font-bold leading-[140%] text-[#FFD56A] mb-2">
									500+
								</div>
								<div className="text-lg font-normal leading-[140%] text-white">
									Event attendees
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainHero;

