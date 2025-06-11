import { useTranslations } from 'next-intl'

const Video = () => {
	const t = useTranslations('home.video')

	return (
		<section
			className="w-dvw text-light-black py-10 bg-white"
		>
			<div
				className="max-w-screen-xl m-auto px-4 xl:px-0 b2 text-black-text flex flex-col"
			>
				<iframe className="w-full aspect-video mb-8" src="https://www.youtube.com/embed/ZEm378CNBy0?si=gKpYHIIz-DbYQ1yH"
								title="YouTube video player"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
								referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
				<h2>{t('title')}</h2>
				<span className="b2 text-black-text">{t('text1')}</span>
				<span className="b2 text-black-text">{t('text2')}</span>
			</div>
		</section>
	)
}

export default Video
