import fb from '@/assets/images/fb.png'
import ig from '@/assets/images/ig.png'
import uthr from '@/assets/images/uthr.png'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const UTHR = () => {
	const t = useTranslations('funds.uthr')

	return (
		<Container
			innerCls="flex flex-col items-center gap-2 md:gap-4 xl:gap-4"
		>
			<Image src={uthr} alt="United Together Humanitarian Relif Inc."/>
			<span className="b1 text-center">{t('text')}</span>
			<div className="flex gap-6 my-6">
				<a href="#">
					<Image src={fb} alt="facebook" width={40} height={40}/>
				</a>
				<a href="#">
					<Image src={ig} alt="instagram" width={40} height={40}/>
				</a>
			</div>
			<div className="flex flex-col gap-1 items-center [&>a]:text-black-text b3">
				<span>{t('quest')}</span>
				<a href="#">+1 (306) 535-1110</a>
				<a href="#">admin@utogetherhr.com</a>
				<a href="#">https://utogetherhr.com</a>
			</div>
		</Container>
	)
}

export default UTHR
