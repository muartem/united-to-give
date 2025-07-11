import Button from '@/components/ui/button'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'

const DonateWhen = () => {
	const t = useTranslations('blood.donateWhen')

	return (
		<div className="flex flex-col gap-8 justify-evenly text-black-text">
			<div className="flex flex-col gap-2">
				<h2 className="text-light-black uppercase text-center md:text-left">{t('title')}</h2>
				<span className="b2 font-bold text-primary">{t('available')}</span>
				<span className="b3">{t('location')}</span>
			</div>
			<div className="flex flex-col gap-4">
				<span className="b1">{t('your')}</span>
				<Ul variant="blood" lis={[t('li1'), t('li2'), t('li3')]}/>
				<span>
					<span className="text-primary">*</span>
					{t('before')}
					<a target="_blank" href="https://blood.ca/am-i-eligible"> {t('eligibility')}</a>
				</span>
			</div>
			<div className="flex flex-col gap-2">
				<Button>{t('donate')}</Button>
				<span className="b3 text-logo-gray">
					{t('more1')}
					<a className="text-logo-gray underline" target="_blank" href="https://blood.ca/">blood.ca </a>
					{t('more2')}
					<a className="text-logo-gray underline" target="_blank" href="tel:18882366283">1-888-236-6283.</a>
				</span>
			</div>
		</div>
	)
}

export default DonateWhen
