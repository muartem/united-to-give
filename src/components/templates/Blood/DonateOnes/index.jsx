import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const DonateOnes = () => {
	const t = useTranslations('blood.ones')

	return (
		<Container
			outerCls="bg-background"
			innerCls="flex flex-col gap-8 items-center pb-12"
		>
			<h1 className="uppercase text-center text-light-black max-w-screen-md">{t('title')}</h1>
			<Button classNames="px-24">{t('button')}</Button>
		</Container>
	)
}

export default DonateOnes
