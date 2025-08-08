import ig from '@/assets/images/ig.png'
import bloggers from '@/assets/images/team/bloggers.png'
import ArrowRight from '@/assets/svg/Arrow-right.jsx'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const ChallengeModal = () => {
  const t = useTranslations('modals.challenge')

  return (
    <div
      className="flex flex-col gap-5 md:justify-stretch md:items-stretch h-full justify-center"
    >
      <div className="flex flex-col md:flex-row gap-10 md:justify-stretch text-left">
        <div className="flex-1 flex flex-col gap-2">
          <h2 className="text-light-black font-bold uppercase flex items-center">
            <Image src={ig} width={46} height={46} alt="instagram"/>
            <div className="ml-5">
              <span className="text-primary">{t('#u2g')}</span>
              {t('challenge')}
            </div>
          </h2>
          <span className="b1 text-black-text mb-2 md:mr-12">
            {t('text')}
          </span>
          <span className="b2 text-primary">
            {t('join')}
          </span>
        </div>
        <div className="flex flex-col items-stretch gap-6 md:gap-8 flex-1 mb-2 md:pr-6">
          <Ul variant="blood"
            lis={[t('li.1'), t('li.2'), `${t('li.3')} ${t('#u2g')}.`, `${t('li.4')} ${t('@u2g')}.`, t('li.5')]}
          />
          <a href="https://www.instagram.com/united_to_give" target="_blank"
            className="b2 text-primary font-bold flex items-center justify-end gap-2 hover:text-dark-primary">
            <Image src={ig} width={24} height={24} alt="instagram"/>
            {t('iglink')}
            <ArrowRight className="[&>path:hover]:fill-dark-primary"/>
          </a>
        </div>
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
