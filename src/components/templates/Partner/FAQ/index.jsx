import faqList from '@/components/templates/Blood/FAQ/faq'
import Accordion from '@/components/ui/accordion'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const Faq = () => {
	const t = useTranslations('partner.faq')

	return (
		<Container
			outerCls="bg-background"
			innerCls="flex flex-col gap-6 md:gap-10 items-stretch"
		>
			<h2 className="uppercase text-center text-light-black">{t('title')}</h2>
			<div className="flex flex-col gap-2">
				{faqList(t).map(({title, desc}, i) => (
					<Accordion title={title} key={i}>{desc}</Accordion>
				))}
			</div>
		</Container>
	)
}

export default Faq
