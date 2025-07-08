import BecomeAPartnerBg from '@/assets/images/become-a-partner-bg.jpg'
import Image from 'next/image'
import Button from '@/components/ui/button'

const BecomeAPartner = () => {
	return (
		<div className="w-dvw mb-20 px-28">
			<div className="relative max-w-screen-xl m-auto border-2 bg-[#F5F5F5] border-[#CFCFD0] rounded-3xl px-20 overflow-hidden">
				<div className="absolute top-0 right-0 bottom-0 w-[747px]">
					<Image src={BecomeAPartnerBg} alt="Hero background" width={747} height={543} className="rounded-3xl object-cover w-[747px] h-[545px]" />
					<div className="absolute top-0 right-0 bottom-0 w-[747px] bg-gradient-to-r from-[#F5F5F5] to-transparent z-10" />
				</div>
				<div className="w-[40%] py-20">
					<div className="h1 text-[#222222] mb-4 leading-[21px] uppercase">become our partner</div>
					<div className="b1 text-[#464646] mb-10">
						Whether you're a business, organization, or passionate individual, partnering with us means unlocking new ways to grow, connect, and make a difference.
					</div>
					<Button variant="custom" classNames="px-20 bg-transparent text-[#222222] border-2 border-[#C5161D]" customPX>Explore pPrtnership</Button>
				</div>
			</div>
		</div>
	)
}

export default BecomeAPartner;
