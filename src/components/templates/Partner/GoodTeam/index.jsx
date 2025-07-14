import cbsLogo from '@/assets/images/cbs_logo.png'
import uthrLogo from '@/assets/images/uthr_logo.png'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const GoodTeam = () => {
	const t = useTranslations('partner.goodTeam')

	return (
		<Container
			innerCls="flex flex-col items-stretch !gap-2 md:gap-2 xl:gap-2"
		>
			<h2 className="text-light-black uppercase text-center">{t('title')}</h2>
			<span className="b1 text-center text-black-text mb-6 md:mb-12">{t('desc')}</span>
			<div className="grid grid-cols-1 md:grid-cols-4 justify-between gap-8 text-black-text">
				<div>
					<div
						className="p-6 flex justify-center items-center bg-light-gray h-36 rounded-xl md:rounded-3xl mb-4 md:mb-8">
						<Image src={cbsLogo} alt="CBS Logo"/>
					</div>
					<div className="b2 font-bold text-light-black mb-2">{t('1.title')}</div>
					{t('1.text')}
				</div>
				<div>
					<div
						className="p-6 flex justify-center items-center bg-light-gray h-36 rounded-xl md:rounded-3xl mb-4 md:mb-8">
						<Image src={uthrLogo} alt="UTHR Logo"/>
					</div>
					<div className="b2 font-bold text-light-black mb-2">{t('2.title')}</div>
					{t('2.text')}
				</div>
				<div>
					<div
						className="p-6 flex justify-center items-center bg-light-gray h-36 rounded-xl md:rounded-3xl mb-4 md:mb-8">

					</div>
					<div className="b2 font-bold text-light-black mb-2">{t('3.title')}</div>
					{t('3.text')}
				</div>
				<div>
					<div
						className="p-6 flex justify-center items-center bg-light-gray h-36 rounded-xl md:rounded-3xl mb-4 md:mb-8">

					</div>
					<div className="b2 font-bold text-light-black mb-2">{t('4.title')}</div>
					{t('4.text')}
				</div>
			</div>
		</Container>
	)
}

export default GoodTeam
