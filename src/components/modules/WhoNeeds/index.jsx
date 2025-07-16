import Needs1 from '@/assets/images/needs1.png'
import Needs2 from '@/assets/images/needs2.png'
import Needs3 from '@/assets/images/needs3.png'
import Needs4 from '@/assets/images/needs4.png'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const WhoNeeds = () => {
	const t = useTranslations('blood.whoNeeds')

	return (
		<div className="grid items-start i grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
			<div className="flex flex-col gap-4">
				<Image className="flex-1 rounded-xl md:rounded-3xl w-full" src={Needs1} alt={t('1')}/>
				<span className="b3 text-light-black">{t('1')}</span>
			</div>
			<div className="flex flex-col gap-4">
				<Image className="flex-1 rounded-xl md:rounded-3xl w-full" src={Needs2} alt={t('2')}/>
				<span className="b3 text-light-black">{t('2')}</span>
			</div>
			<div className="flex flex-col gap-4">
				<Image className="flex-1 rounded-xl md:rounded-3xl w-full" src={Needs3} alt={t('3')}/>
				<span className="b3 text-light-black">{t('3')}</span>
			</div>
			<div className="flex flex-col gap-4">
				<Image className="flex-1 rounded-xl md:rounded-3xl w-full" src={Needs4} alt={t('4')}/>
				<span className="b3 text-light-black">{t('4')}</span>
			</div>
		</div>
	)
}

export default WhoNeeds
