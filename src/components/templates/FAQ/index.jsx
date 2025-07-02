import faqList from '@/components/templates/FAQ/faq'
import Accordion from '@/components/ui/accordion'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const DonateTogether = () => {
	const t = useTranslations('blood.faq')

	return (
		<Container
			outerCls="bg-background"
			innerCls="flex flex-col gap-10 items-stretch gap-10"
		>
			<h2 className="uppercase text-center text-light-black">Frequently Asked Questions</h2>
			<div className="flex flex-col gap-2">
				{faqList(t).map(({title, desc}) => (
					<Accordion title={title}>{desc}</Accordion>
				))}
			</div>
		</Container>
	)
}

export default DonateTogether
