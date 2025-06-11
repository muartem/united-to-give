import {useTranslations} from 'next-intl'

const Numbers = () => {
	const t = useTranslations('home.numbers')

	return (
		<section
			className="w-dvw text-light-black py-10"
		>
			<div
				className="max-w-screen-xl m-auto px-4 xl:px-0 grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-10 b2 text-black-text"
			>
				<div>
					<h2 className="text-primary">{t('1.title')}</h2>
					{t('1.text')}
				</div>
				<div>
					<h2 className="text-primary">{t('2.title')}</h2>
					{t('2.text')}
				</div>
				<div>
					<h2 className="text-primary">{t('3.title')}</h2>
					{t('3.text1')} <a href="/" >{t('3.#')}</a> {t('3.text2')}
				</div>
				<div>
					<h2 className="text-primary">{t('4.title')}</h2>
					<span>{t('4.text')}</span>
				</div>
			</div>
		</section>
	)
}

export default Numbers
