import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const HowDonate = () => {
	const t = useTranslations('blood.howDonate')

	return (
		<Container
			outerCls="bg-light-gray"
			innerCls="flex flex-col gap-10"
		>
			<h2 className="text-light-black uppercase text-center md:text-left">{t('title')}</h2>
			<div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 xl:gap-10">
				<div className="flex gap-8 items-center">
					<div className="bg-card-bg rounded-3xl px-8 w-24 h-24 flex justify-center items-center">
						<h1 className="text-primary font-bold">1</h1>
					</div>
					<div>
						<h3 className="text-black-text mb-2">{t('1.title')}</h3>
						<span className="b2 text-black-text">
								{t('1.text1')}
							<a target="_blank" href="https://myaccount.blood.ca/en/join-team/UNIT0126631">{t('1.cbs')}</a>
							{t('1.text2')}
							</span>
					</div>

				</div>
				<div className="flex gap-8 items-center">
					<div className="bg-card-bg rounded-3xl px-8 w-24 h-24 flex justify-center items-center">
						<h1 className="text-primary font-bold">2</h1>
					</div>
					<div>
						<h3 className="text-black-text mb-2">{t('2.title')}</h3>
						<span className="b2 text-black-text">
							<a target="_blank" href="https://www.blood.ca/en/blood/am-i-eligible-donate-blood">{t('2.check')}</a>
							{t('2.text')}
							</span>
					</div>

				</div>
				<div className="flex gap-8 items-center">
					<div className="bg-card-bg rounded-3xl px-8 w-24 h-24 flex justify-center items-center">
						<h1 className="text-primary font-bold">3</h1>
					</div>
					<div>
						<h3 className="text-black-text mb-2">{t('3.title')}</h3>
						<span className="b2 text-black-text">
								{t('3.text')}
							</span>
					</div>

				</div>
				<div className="flex gap-8 items-center">
					<div className="bg-card-bg rounded-3xl px-8 w-24 h-24 flex justify-center items-center">
						<h1 className="text-primary font-bold">4</h1>
					</div>
					<div>
						<h3 className="text-black-text mb-2">{t('4.title')}</h3>
						<span className="b2 text-black-text">
								{t('4.text')}
							</span>
					</div>

				</div>
			</div>
		</Container>
	)
}

export default HowDonate
