import AttendEvent from '@/components/modules/AttendEvent'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const OtherWays = () => {
	const t = useTranslations('blood.other')

	return (
		<Container
			outerCls="bg-light-gray"
			innerCls="flex flex-col gap-12 md:gap-18 items-stretch"
		>
			<h2 className="uppercase text-center text-light-black">{t('title')}</h2>
			<AttendEvent/>
			{/*<HelpUkraine/>*/}
			{/*<BecomePartner/>*/}
		</Container>
	)
}

export default OtherWays
