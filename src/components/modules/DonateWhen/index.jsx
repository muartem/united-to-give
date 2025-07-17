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
				<a className="contents" target="_blank" href="https://myaccount.blood.ca/en/join-team/UNIT0126631">
					<Button>{t('donate')}</Button>
				</a>
				<span className="b3 text-logo-gray">
					{t('more')}
					<a className="text-logo-gray underline" target="_blank" href="mailto:unitedtogive@gmail.com">unitedtogive@gmail.com</a>
				</span>
			</div>
		</div>
	)
}

export default DonateWhen
