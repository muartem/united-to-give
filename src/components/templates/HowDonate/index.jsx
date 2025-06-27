import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const HowDonate = () => {
	const t = useTranslations('blood.howDonate')

	return (
		<Container
			outerCls="bg-light-gray"
			innerCls="flex flex-col gap-10"
		>
			<h2 className="text-light-black uppercase">{t('title')}</h2>
			<div className="grid md:grid-flow-col grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8">
				<div className="flex gap-8 items-center">
					<div className="bg-card-bg rounded-3xl px-8 w-24 h-24 flex justify-center items-center">
						<h1 className="text-primary font-bold">1</h1>
					</div>
					<div>
						<h3 className="text-black-text mb-2">{t('1.title')}</h3>
						<span className="b2 text-black-text">
								{t('1.text1')}
							<a className="text-black-text underline text-nowrap" target="_blank"
								 href="tel:18882366283">1-888-236-6283.</a>
								<a target="_blank" href="https://blood.ca/am-i-eligible">{t('1.check')}</a>
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
