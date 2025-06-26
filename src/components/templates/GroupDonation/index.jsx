import Event from '@/components/modules/Event'
import FirstVolunteers from '@/components/modules/FirstVolunteers'
import JoinDonationForm from '@/components/modules/Form'
import Bloggers from '@/components/ui/bloggers'

const GroupDonation = () => (
	<section
		className="w-dvw text-light-black py-10 md:py-16 bg-light-gray"
	>
		<div
			className="max-w-screen-xl m-auto px-4 xl:px-0 b2 text-black-text grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center"
		>
			<div>
				<Bloggers/>
				<Event/>
				<FirstVolunteers/>
			</div>
			<JoinDonationForm/>
		</div>
	</section>
)

export default GroupDonation
