import WhoNeeds from '@/components/modules/WhoNeeds'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const BeReason = () => {
	const t = useTranslations('blood.reason')

	return (
		<Container
			outerCls="bg-light-gray"
			innerCls="grid grid-cols-1 md:grid-cols-2 md:gap-20 md:justify-between"
		>
			<div className="flex flex-col gap-8">
				<h1 className="text-light-black uppercase">
					{t('be')}
					<span className="text-primary">{t('reason')}</span>
					{t('someone')}
					<span className="text-primary">{t('tomorrow')}</span>
				</h1>
				<WhoNeeds />
			</div>
			<div>

			</div>
		</Container>
	)
}

export default BeReason
