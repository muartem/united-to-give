import {useTranslations} from 'next-intl'

const Event = () => {
	const t = useTranslations('home.groupDonation')

	return (
		<div
			className="w-full p-10 b2 text-black-text flex flex-col bg-card-bg rounded-b-xl md:rounded-b-3xl"
		>
			<h1 className="uppercase text-primary font-normal mb-1">{t('date')}</h1>
			<span>{t('text1')}</span>
			<ul className="list-disc & > * ml-5">
				<li>{t('text2')}</li>
				<li>{t('text3')}</li>
			</ul>
			<span>{t('text4')}</span>
			<span className="mt-10">
				<span className="text-primary">*</span>
				{t('text5')}
				<a href="/"> {t('eligibility')}</a>
			</span>
		</div>
	)
}

export default Event
