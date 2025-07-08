import CbsLogo from '@/assets/images/partners/cbs.svg'
import UtLogo from '@/assets/images/partners/ut.svg'
import Image from 'next/image'

const MainPartners = () => {
	return (
		<div className="mb-16">
			<div className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left">
				<div className="flex justify-between items-center px-28 w-full gap-10">
					<Image src={CbsLogo} alt="Hero background" width={191} height={38} />
					<Image src={UtLogo} alt="Hero background" width={57} height={60} />
					<Image src={CbsLogo} alt="Hero background" width={191} height={38} />
					<Image src={UtLogo} alt="Hero background" width={57} height={60} />
					<Image src={CbsLogo} alt="Hero background" width={191} height={38} />
					<Image src={UtLogo} alt="Hero background" width={57} height={60} />
					<Image src={CbsLogo} alt="Hero background" width={191} height={38} />
				</div>
			</div>
		</div>
	)
}

export default MainPartners;

