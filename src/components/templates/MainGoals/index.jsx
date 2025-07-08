import HeroBg from '@/assets/images/hero-bg.jpg'
import GoalImage from '@/assets/images/goal.jpg'
import BloodIcon from '@/assets/images/icons/blood-droplet.svg'
import Image from 'next/image'
import Button from '@/components/ui/button'

const MainGoals = () => {
	return (
		<div className="w-dvw text-light-black mb-16">
			<div className="relative max-w-screen-xl m-auto h-full text-center md:text-left px-28">
				<div className="text-[32px] font-bold text-center text-transform-uppercase mb-8 text-[#222222]">Our Goals</div>
				<div className="flex justify-between items-center gap-10 mb-8">
					<div className="flex-1">
						<div className="text-[26px] font-bold text-light-black mb-4">
							Solidarity And Gratitude
						</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646] mb-4">
							Our goal is to support Canada’s national blood donation system as a powerful expression of solidarity and gratitude from the Ukrainian community. By actively participating in this life-saving effort, we aim to show that Ukrainians are not only grateful for the support they’ve received, but are also willing to give back and stand with Canadians in meaningful ways. 
						</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							Through this initiative, we also strive to strengthen Ukraine’s role and reputation as a compassionate, responsible, and engaged global partner committed to humanitarian values and civic contribution.
						</div>
					</div>
					<div className="flex-1 flex justify-center items-center">
						<Image src={HeroBg} alt="Goal Image" width={235} height={235} />
					</div>
				</div>
				<div className="flex justify-between items-center gap-10 mb-16">
					<div className="flex-1 flex justify-center items-center">
						<Image src={HeroBg} alt="Goal Image" width={235} height={235} />
					</div>
					<div className="flex-1">
						<div className="text-[26px] font-bold text-light-black mb-4">
							Raise awareness
						</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646] mb-4">
							Our goal is to remind people in Canada about Ukraine - not only through the lens of war and crisis, but through positive, visible contributions by the Ukrainian community. 
						</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							By leading and participating in humanitarian actions like blood donation, we aim to shift the narrative and show Ukraine as a nation of strength, compassion, and civic responsibility.
						</div>
					</div>
				</div>
				<div className="flex justify-between items-center gap-20 mb-8">
					<div className="flex-1">
						<div className="text-[26px] font-bold text-light-black mb-4">
							Help Ukraine
						</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646] mb-3">
							We’re raising funds to support the Ukrainian Blood Donation Center -because every life saved begins with someone who cares. Through United Together Humanitarian Relief Inc., your donation will help provide critical medical supplies, equipment, and hope to those who need it most.
						</div>
						<div className="text-lg font-normal leading-[140%] text-[#464646]">
							<div className="flex items-center gap-6 mb-2">
								<Image src={BloodIcon} alt="Blood Icon" width={15} height={24} />
								<div>100% of funds go to Ukrainian hospitals</div>
							</div>
							<div className="flex items-center gap-6 mb-2">
								<Image src={BloodIcon} alt="Blood Icon" width={15} height={24} />
								<div>Make a difference from anywhere</div>
							</div>
							<div className="flex items-center gap-6 mb-8">
								<Image src={BloodIcon} alt="Blood Icon" width={15} height={24} />
								<div>Donate as a partner</div>
							</div>
							<Button variant="custom" classNames="px-20 bg-transparent text-[#222222] border-2 border-[#C5161D]" customPX>Donate Funds</Button>
						</div>
					</div>
					<div className="flex-1 flex justify-center items-center">
						<Image src={GoalImage} alt="Goal Image" width={592} height={403} className="w-full h-full object-cover object-center" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainGoals;
// /* Frame 7 */

// box-sizing: border-box;

// /* Auto layout */
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// padding: 14px 64px;
// gap: 10px;

// width: 300px;
// height: 49px;

// /* Background white */
// background: #FFFAFE;
// /* Primary */
// border: 3px solid #C5161D;
// border-radius: 32px;

// /* Inside auto layout */
// flex: none;
// order: 1;
// flex-grow: 0;
