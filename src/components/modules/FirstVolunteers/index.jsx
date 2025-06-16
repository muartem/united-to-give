import {useTranslations} from 'next-intl'
import Blood from '@/assets/svg/blood'

const FirstVolunteers = () => {
	const t = useTranslations('home.groupDonation')

	return (
		<div
			className="w-full px-0 py-8 b2 text-black-text flex flex-col gap-4"
		>
			<h2 className="uppercase text-primary ">{t('firstUnited')}</h2>
			<span className="b1">{t('text6')}</span>
			<ul className={`b2 list-none [&>li]:flex [&>li]:gap-6`}>
				<li><Blood/>{t('text7')}</li>
				<li><Blood/>{t('text8')}</li>
				<li><Blood/>{t('text9')}</li>
			</ul>
		</div>
	)
}

export default FirstVolunteers
