import ig from '@/assets/images/ig.png'
import bloggers from '@/assets/images/team/bloggers.png'
import Ul from '@/components/ui/ul.js'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const ChallengeModal = () => {
	const t = useTranslations('modals.challenge')

	return (
		<div
			className="flex flex-col gap-5 md:justify-stretch md:items-stretch"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:justify-stretch">
				<div className="flex flex-col gap-2 md:mr-12">
					<h2 className="text-light-black font-bold uppercase flex items-center">
						<Image src={ig} width={46} height={46} alt="instagram"/>
						<span className="ml-[27px] text-primary">{t('#u2g')}</span>
						{t('challenge')}
					</h2>
					<span className="b1 text-black-text mb-2">
						{t('text')}
					</span>
					<span className="b2 text-primary">
						{t('join')}
					</span>
				</div>
				<Ul variant="blood" classNames="mb-2"
						lis={[t('li.1'), t('li.2'), `${t('li.3')} ${t('#u2g')}.`, `${t('li.4')} ${t('@u2g')}.`, t('li.5')]}
				/>
			</div>
			<Image
				className="w-full h-auto"
				src={bloggers}
				alt={'our team'}
			/>
		</div>
	)
}

export default ChallengeModal
