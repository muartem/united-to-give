import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'

const FirstVolunteers = () => {
	const t = useTranslations('home.groupDonation')

	return (
		<div
			className="w-full px-0 py-8 b2 text-black-text flex flex-col gap-4"
		>
			<h2 className="uppercase text-primary ">{t('firstUnited')}</h2>
			<span className="b1">{t('text6')}</span>
			<Ul variant="blood" lis={[t('text7'), t('text8'), t('text9')]}/>
		</div>
	)
}

export default FirstVolunteers
