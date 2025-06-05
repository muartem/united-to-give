import { getDictionary } from '@/app/[locale]/dictionaries'
import LanguageSwitcher from '@/components/switcher'

export default async function Home({ params }) {
	const { locale } = await params
	const t = await getDictionary(locale)

	return (
		<main>
			<LanguageSwitcher />
			<h1>{t.hello}</h1>
			<p>{t.welcome}</p>
		</main>
	)
}