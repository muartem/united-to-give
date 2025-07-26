import ig from '@/assets/images/ig.png'
import bloggers from '@/assets/images/team/bloggers.png'
import Ul from '@/components/ui/ul.js'
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
        <Ul variant="blood" classNames="flex-1 mb-2"
          lis={[t('li.1'), t('li.2'), `${t('li.3')} ${t('#u2g')}.`, `${t('li.4')} ${t('@u2g')}.`, t('li.5')]}
        />
      </div>
      <Image
        className="hidden md:block w-full h-auto"
        src={bloggers}
        alt={'our team'}
      />
    </div>
  )
}

export default ChallengeModal
