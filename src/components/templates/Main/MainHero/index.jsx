import HeroBg from '@/assets/images/hero-bg.jpg'
import Button from '@/components/ui/button'
import Image from 'next/image'

const MainHero = () => {
	return (
		<main className="md:h-[752px] w-dvw bg-main-gradient md:bg-bw-gradient text-light-black">
			<div className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left flex-col md:flex-row">
				<div className="flex flex-col w-auto md:w-1/2 justify-between pt-16 pb-12 px-6 xl:px-16">
					<div>
						<h1 className="uppercase text-black-text mb-0.5">
							Join the <span className="text-primary">Blood Donation</span> Initiative
						</h1>
						<div className="b2 text-light-black mb-6 md:mb-4">
							Donate once - save three lives anytime between <span className="text-primary">April 20 to May 10</span>. Help in the way you can.
						</div>
					</div>
					<div>
						<div className="mb-4 md:mb-12">
							<Button variant='primary' classNames="!px-16 !py-4">
								Donate Blood
							</Button>
						</div>
						<div className="flex gap-4 md:gap-10 h-auto flex-col md:flex-row">
							<div className="flex-1">
								<h2 className="text-primary">
									1000+
								</h2>
								<div className="b2 text-black-text">
									Our goal is to attract a thousand of new donors in Toronto.
								</div>
							</div>
							<div className="flex-1">
								<h2 className="text-primary">
									$5,000
								</h2>
								<div className="b2 text-black-text">
									Collect funds that will be sent to support Ukrainian blood center
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-auto md:w-1/2 relative">
					<Image src={HeroBg} alt="Hero background" width={568} height={568} className="w-full h-full object-cover object-center absolute top-0 right-0" />
					<div className="flex flex-col pt-16 pb-12 px-6 xl:px-16 relative z-10 w-full">
						<h1 className="uppercase text-background mb-[2px]">
							<span className="text-primary">Attend</span> charity networking event
						</h1>
						<div className="b2 text-background mb-6">
							Made by Ukrainians, for Ukrainians and friends. Don't hesitate - you know our quality and taste. You're going to love it.
						</div>
						<div className="mb-4 md:mb-12">
							<Button variant="event" classNames="!px-16 !py-4">
								Attend Event
							</Button>
						</div>
						<div className="flex gap-4 md:gap-10 md:h-[190px] h-auto flex-col md:flex-row">
							<div className="flex-1">
								<h2 className="text-golden-yellow">
									3 speakers
								</h2>
								<div className="b2 text-background">
									People you all know will share their experiences in Canada.
								</div>
							</div>
							<div className="flex-1">
								<h2 className="text-golden-yellow">
									500+
								</h2>
								<div className="b2 text-background">
									Event attendees
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	)
}

export default MainHero;

