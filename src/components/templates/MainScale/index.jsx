import CbsLogo from '@/assets/images/partners/cbs.svg'
import UtLogo from '@/assets/images/partners/ut.svg'
import Image from 'next/image'

const MainScale = () => {
	return (
		<div className="w-dvw text-light-black mb-12 px-28">
			<div className="relative max-w-screen-xl m-auto text-center md:text-left">
				<div className="h2 text-transform-uppercase text-[#222222] mb-8 text-center">
					Scale of the Initiative
				</div>
				<div className="b1 text-[#222222] mb-2 text-center">
					📅 Duration: 6 months
				</div>
				<div className="b1 text-[#222222] mb-10 text-center">
					👥 Target: Engage thousands of donors across Canada
				</div>
				<div className="flex justify-between gap-6">
					<div className="flex-1">
						<div className="flex justify-center items-center h-[140px] px-[10px] bg-[#F5F5F5] rounded-3xl mb-8">
							<Image src={CbsLogo} alt="Hero background" width={236} height={48} />
						</div>
						<div className="text-lg font-bold tracking-[0.02em] text-[#222222] mb-2 leading-[21px]">Location</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							Launch in Toronto with expansion to other cities across Canada.
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-center items-center h-[140px] px-[10px] bg-[#F5F5F5] rounded-3xl mb-8">
							<Image src={UtLogo} alt="Hero background" width={90} height={94} />
						</div>
						<div className="text-lg font-bold tracking-[0.02em] text-[#222222] mb-2 leading-[21px]">Connections</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							Partnerships with volunteer organizations, businesses, business clubs, bloggers, media, and faith groups.
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-center items-center h-[140px] px-[10px] bg-[#F5F5F5] rounded-3xl mb-8">
							<Image src={CbsLogo} alt="Hero background" width={236} height={48} />
						</div>
						<div className="text-lg font-bold tracking-[0.02em] text-[#222222] mb-2 leading-[21px]">Community</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							Nationwide outreach to the Ukrainian diaspora, with a focus on engaging local communities.
						</div>
					</div>
					<div className="flex-1">
						<div className="flex justify-center items-center h-[140px] px-[10px] bg-[#F5F5F5] rounded-3xl mb-8">
							<Image src={CbsLogo} alt="Hero background" width={236} height={48} />
						</div>
						<div className="text-lg font-bold tracking-[0.02em] text-[#222222] mb-2 leading-[21px]">Vision</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							Combination of local events and national campaigns.
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainScale;
