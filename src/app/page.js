import '../../middleware'
import { redirect } from 'next/navigation'

export default async function Home() {
	redirect('/en')

	return (
		<main>
			redirect...
		</main>
	)
}
