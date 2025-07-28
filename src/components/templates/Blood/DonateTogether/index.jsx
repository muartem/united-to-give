import ig from '@/assets/images/ig.png'
import tg from '@/assets/images/tg.png'
import ArrowRight from '@/assets/svg/Arrow-right'
import ChallengeModal from '@/components/modules/ChallengeModal/index.jsx'
import Container from '@/components/ui/container'
import {ModalHandler} from '@/components/ui/modal.jsx'
import Ol from '@/components/ui/ol'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const DonateTogether = () => {
  const t = useTranslations('blood.donateTogether')

  return (
    <Container
      outerCls="bg-background"
      innerCls="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 xl:gap-20 md:justify-between"
    >
      <div className="flex flex-col gap-2">
        <h2 className="text-light-black uppercase text-center md:text-left">
          {t('title')}
          <span className="text-primary">{t('date')}</span>
        </h2>
        <span className="b2 font-bold text-primary">{t('time')}</span>
        <span className="b3 mb-4 md:mb-10">{t('location')}</span>
        <span className="b1 text-black-text mb-2">{t('description')}</span>
        <Ol classNames="mb-2" lis={[t('li1'), t('li2'), t('li3'), t('li4')]}/>
        <a href="#" target="_blank"
					 className="flex b2 text-primary font-bold justify-end md:justify-start items-center gap-4 hover:text-dark-primary">
          <Image src={tg} alt="telegram"/>
          {t('jointg')}
          <ArrowRight className="[&>path:hover]:fill-dark-primary -ml-2"/>
        </a>
      </div>
      <div className="flex flex-col gap-6 md:gap-12">
        <div className="flex flex-col gap-2">
          <h3 className="text-light-black uppercase flex items-center gap-4">
            <Image src={ig} alt="instagram"/>
            {t('igshare')}
          </h3>
          <span className="b2 text-black-text mb-2">
            {t('igdesc1')}
            <ModalHandler
              handler={<span className="text-mid-link"> {t('#')} </span>}
              modalContent={<ChallengeModal/>}
              modalStyles="md:!pb-0"
            />
            {t('igdesc2')}
          </span>
          <ModalHandler
            handler={
              <span
                className="b2 text-light-black font-bold flex justify-end md:justify-start items-center gap-1 hover:text-dark-primary"
              >
                {t('iglink1')}
                <span className="text-mid-link">{t('#')}</span>
                {t('iglink2')}
                <ArrowRight className="[&>path:hover]:fill-dark-primary ml-2"/>
              </span>
            }
            modalContent={<ChallengeModal/>}
            modalStyles="md:!pb-0"
          />

        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-light-black uppercase flex items-center gap-4">
            <Image src={tg} alt="telegram"/>
            {t('tgshare')}
          </h3>
          <span className="b2 text-black-text mb-2">{t('tgdesc')}</span>
          <a href="#"
						 className="b2 text-primary font-bold flex justify-end md:justify-start items-center gap-4 hover:text-dark-primary">
            {t('tglink')}
            <ArrowRight className="[&>path:hover]:fill-dark-primary -ml-2"/>
          </a>
        </div>
      </div>
    </Container>
  )
}

export default DonateTogether
