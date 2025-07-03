import helpU from '@/assets/images/helpU.png'
import Button from '@/components/ui/button'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const HelpUkraine = () => {
	const t = useTranslations('blood.other.help')

	return (
		<div
			className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 xl:gap-20 md:justify-stretch md:items-center"
		>
			<div className="md:order-2 flex flex-col gap-4 md:gap-8 justify-evenly text-black-text">
				<h2 className="text-light-black">{t('title')}</h2>
				<div className="flex flex-col gap-4">
					<span className="b1">
						{t('text1')}
						<a href="#">{t('link')}</a>
						{t('text2')}
					</span>
					<Ul variant="blood" lis={[t('li1'), t('li2'), t('li3')]}/>
				</div>
				<Button variant="secondary">{t('donate')}</Button>
			</div>
			<Image className="md:order-1 rounded-xl md:rounded-3xl" src={helpU} alt={t('title')}/>
		</div>
	)
}

export default HelpUkraine
