import HeroBg from '@/assets/images/hero-bg.jpg'
import Image from 'next/image'

const MainWhatIs = () => {
	return (
		<div className="w-dvw bg-[#F5F5F5] text-light-black mb-16 py-16 px-6 md:px-28">
			<div className="relative max-w-screen-xl m-auto h-full flex flex-col md:flex-row justify-between items-center text-center md:text-left">
				<div className="flex-1">
					<div className="text-6xl font-normal text-transform-uppercase text-[#222222] tracking-[-0.02em] mb-8 md:mb-0">
						What Is 
						<div className="text-[#C5161D]">“United to Give”?</div>
					</div>
				</div>
				<div className="flex-1">
					<div className="text-2xl font-normal leading-[130%] text-[#464646] mb-6">
						“United to Give is a nationwide humanitarian campaign that unites Ukrainians across Canada to support the national blood donation system and show the power of community.
					</div>
					<div className="text-2xl font-normal leading-[130%] text-[#464646] mb-6">
						It’s more than just donating blood - it’s about showing Ukrainians as an active, grateful, and compassionate group, ready to share life even in the most difficult times.”
					</div>
					<div className="text-lg font-bold tracking-[0.02em] text-[#464646]">
						Volodymyr Chaus, Sofiia Orlovska
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainWhatIs;

