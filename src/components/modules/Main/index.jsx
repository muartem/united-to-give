import Kid from '@/assets/images/main_kid.png'
import Button from '@/components/ui/button'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const Main = () => {
	const t = useTranslations('home.main')

	return (
		<main
			className="max-h-dvh md:h-[752px] w-dvw bg-main-gradient text-light-black"
		>
			<div
				className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left"
			>
				<div
					className="flex z-10 flex-col justify-between gap-12 py-12 px-4 md:px-0 md:py-24"
				>
					<div className="flex flex-col gap-4">
						<h1 className="uppercase font-normal">
							{t('title')}<span className="text-primary">{t('time')}</span>
						</h1>
						<span className="b2 text-black-text">
						{t('subTitle')}<span className="text-primary">{t('dateRange')}</span>
					</span>
					</div>
					<div className="flex flex-col gap-4 items-center md:items-start">
						<h2 className="text-black-text uppercase">
							{t('text1')}
						</h2>
						<Button classNames="w-64">{t('donateBtn')}</Button>
					</div>
				</div>
				<div
					className="absolute opacity-50 w-dvw flex-none pt-8 h-full md:pt-0 md:static md:flex md:opacity-100 md:w-max">
					<Image className="h-full" src={Kid} width={568} alt={'kid'}/>
				</div>
			</div>
		</main>
	)
}

export default Main