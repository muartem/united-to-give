import Bloggers from '@/components/ui/bloggers'
import JoinDonationForm from '@/components/modules/Form'
import Event from '@/components/modules/Event'

const GroupDonation = () => {
	return (
		<section
			className="w-dvw text-light-black py-10 md:py-16 bg-light-gray"
		>
			<div
				className="max-w-screen-xl m-auto px-4 xl:px-0 b2 text-black-text grid grid-cols-1 md:grid-cols-2 gap-8"
			>
				<div>
					<Bloggers />
					<Event />
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, facilis, quaerat? Doloribus et eveniet iure laudantium, magni provident repellat tenetur.</div>
				<JoinDonationForm />
			</div>
		</section>
	)
}

export default GroupDonation
