import GoalImage from '@/assets/images/goal.jpg'
import HeroBg from '@/assets/images/hero-bg.jpg'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul'
import Image from 'next/image'

const MainGoals = () => {
	return (
		<Container
			outerCls="bg-background"
			innerCls="relative"
		>
			<h2 className="text-[32px] font-bold text-center uppercase mb-8 text-light-black">Our Goals</h2>
			<div className="flex justify-between items-center gap-10 md:gap-20 mb-8 flex-col md:flex-row">
				<div className="flex-1 order-2 md:order-1">
					<h3 className="font-bold text-light-black mb-4">
						Solidarity And Gratitude
					</h3>
					<div className="b2 text-black-text mb-4">
						Our goal is to support Canada’s national blood donation system as a powerful expression of solidarity and
						gratitude from the Ukrainian community. By actively participating in this life-saving effort, we aim to show
						that Ukrainians are not only grateful for the support they’ve received, but are also willing to give back
						and stand with Canadians in meaningful ways.
					</div>
					<div className="b2 text-black-text">
						Through this initiative, we also strive to strengthen Ukraine’s role and reputation as a compassionate,
						responsible, and engaged global partner committed to humanitarian values and civic contribution.
					</div>
				</div>
				<Image className="order-1 md:order-2 m-auto w-auto h-auto rounded-xl md:rounded-3xl" src={HeroBg}
							 alt="Goal Image" width={235} height={235}
				/>
			</div>
			<div className="flex justify-between items-center gap-10 md:gap-20 mb-16 flex-col md:flex-row">
				<Image className="m-auto w-auto h-auto rounded-xl md:rounded-3xl" src={HeroBg}
							 alt="Goal Image" width={235} height={235}
				/>
				<div className="flex-1">
					<h3 className="text-light-black mb-4">
						Raise awareness
					</h3>
					<div className="b2 text-black-text mb-4">
						Our goal is to remind people in Canada about Ukraine - not only through the lens of war and crisis, but
						through positive, visible contributions by the Ukrainian community.
					</div>
					<div className="b2 text-black-text">
						By leading and participating in humanitarian actions like blood donation, we aim to shift the narrative and
						show Ukraine as a nation of strength, compassion, and civic responsibility.
					</div>
				</div>
			</div>
			<div className="flex justify-between items-center gap-20 mb-8 flex-col md:flex-row">
				<div className="flex flex-col gap-4 flex-1 order-2 md:order-1">
					<h3 className="text-light-black">
						Help Ukraine
					</h3>
					<div className="b2 text-black-text">
						We’re raising funds to support the Ukrainian Blood Donation Center -because every life saved begins with
						someone who cares. Through
						<a href="" className="text-mid-link"> United Together Humanitarian Relief Inc.</a>, your donation will help
						provide
						critical medical supplies, equipment, and hope to those who need it most.
					</div>
					<Ul variant="blood" lis={[
						'100% of funds go to Ukrainian hospitals', 'Make a difference from anywhere', 'Donate as a partner'
					]}/>
					<Button variant="secondary" classNames="!px-20 w-max mt-2">
						Donate Funds
					</Button>
				</div>
				<div className="flex-1 flex justify-center items-center order-1 md:order-2">
					<Image src={GoalImage} alt="Goal Image" width={592} height={403}
								 className="w-full h-full object-cover object-center"/>
				</div>
			</div>
		</Container>
	)
}

export default MainGoals
