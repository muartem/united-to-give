import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const Numbers = () => {
	const t = useTranslations('funds.numbers')

	return (
		<Container
			innerCls="grid grid-cols-2 md:grid-cols-4 text-black-text text-center md:text-left"
		>
			<div>
				<h2 className="text-primary uppercase">{t('1.title')}</h2>
				{t('1.text')}
			</div>
			<div>
				<h2 className="text-primary uppercase">{t('2.title')}</h2>
				{t('2.text')}
			</div>
			<div>
				<h2 className="text-primary uppercase">{t('3.title')}</h2>
				{t('3.text')}
			</div>
			<div>
				<h2 className="text-primary uppercase">{t('4.title')}</h2>
				{t('4.text')}
			</div>
		</Container>
	)
}

export default Numbers
