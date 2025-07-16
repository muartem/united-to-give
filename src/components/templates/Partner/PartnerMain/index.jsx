import women from '@/assets/images/women.png'
import Button from '@/components/ui/button'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const PartnerMain = () => {
	const t = useTranslations('partner.main')

	return (
		<main
			className="md:h-[752px] w-dvw bg-light-gray text-light-black"
		>
			<div
				className="relative max-w-screen-xl m-auto h-full grid grid-cols-1 gap-6
				md:grid-cols-[2fr_4fr] md:gap-0 md:justify-stretch md:items-stretch"
			>
				<div className="z-10 p-10 md:p-0">
					<div className="flex flex-col gap-4 text-black-text md:py-36 md:w-[120%]">
						<h1 className="text-light-black uppercase">{t('title')}</h1>
						<span className="b1 md:mb-8">{t('text')}</span>
						<Button variant="secondary">{t('button')}</Button>
					</div>
				</div>
				<Image
					className="
					w-full h-full object-cover md:[mask-image:linear-gradient(to_right,transparent,white_60%)]
					absolute top-0 left-0 opacity-30
					md:static md:opacity-100
				"
					src={women}
					alt={t('title')}
				/>
			</div>
		</main>
	)
}

export default PartnerMain
