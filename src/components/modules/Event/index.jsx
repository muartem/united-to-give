import {useTranslations} from 'next-intl'
import Card from '@/components/ui/card'

const Event = () => {
	const t = useTranslations('home.groupDonation')

	return (
		<Card>
			<h1 className="uppercase text-primary font-normal mb-1">{t('date')}</h1>
			<span>{t('text1')}</span>
			<ul className="list-disc list-inside ml-2">
				<li>{t('text2')}</li>
				<li>{t('text3')}</li>
			</ul>
			<span>{t('text4')}</span>
			<span className="mt-10">
				<span className="text-primary">*</span>
				{t('text5')}
				<a href="/"> {t('eligibility')}</a>
			</span>
		</Card>
	)
}

export default Event
