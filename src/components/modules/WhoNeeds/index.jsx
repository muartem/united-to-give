import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Needs1 from '@/assets/images/needs1.png'
import Needs2 from '@/assets/images/needs2.png'
import Needs3 from '@/assets/images/needs3.png'
import Needs4 from '@/assets/images/needs4.png'

const WhoNeeds = () => {
	const t = useTranslations('home.whoNeeds')

	return (
		<section
			className="w-dvw text-teal-50 py-10"
		>
			<div
				className="max-w-screen-xl m-auto px-4 xl:px-0 b2 text-black-text flex flex-col gap-10"
			>
				<h2 className="text-center uppercase">{t('title')}</h2>
				<div className="grid items-center md:items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 ">
					<div className="flex flex-col gap-2">
						<Image className="rounded-xl md:rounded-3xl mb-4 w-full" src={Needs1} alt={'Image'}/>
						<h3 className="text-light-black">{t('1.title')}</h3>
						{t('1.text')}
					</div>
					<div className="flex flex-col gap-2">
						<Image className="rounded-xl md:rounded-3xl mb-4 w-full" src={Needs2} alt={'Image'}/>
						<h3 className="text-light-black">{t('2.title')}</h3>
						{t('2.text')}
					</div>
					<div className="flex flex-col gap-2 ">
						<Image className="rounded-xl md:rounded-3xl mb-4 w-full" src={Needs3} alt={'Image'}/>
						<h3 className="text-light-black">{t('3.title')}</h3>
						{t('3.text')}
					</div>
					<div className="flex flex-col gap-2">
						<Image className="rounded-xl md:rounded-3xl mb-4 w-full" src={Needs4} alt={'Image'}/>
						<h3 className="text-light-black">{t('4.title')}</h3>
						{t('4.text')}
					</div>
				</div>
			</div>
		</section>
	)
}

export default WhoNeeds
