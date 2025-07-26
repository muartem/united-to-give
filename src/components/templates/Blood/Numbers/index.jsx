import ChallengeModal from '@/components/modules/ChallengeModal/index.jsx'
import Container from '@/components/ui/container'
import {ModalHandler} from '@/components/ui/modal.jsx'
import {useTranslations} from 'next-intl'

const Numbers = () => {
  const t = useTranslations('blood.numbers')

  return (
    <Container
      innerCls="grid grid-cols-2 md:grid-cols-4 text-black-text text-center md:text-left"
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
        {t('3.text1')}
        <ModalHandler
          handler={<span className="text-mid-link"> {t('3.#')} </span>}
          modalContent={<ChallengeModal/>}
          modalStyles="md:!pb-0"
        />
        {t('3.text2')}
      </div>
      <div>
        <h2 className="text-primary">{t('4.title')}</h2>
        <span>{t('4.text')}</span>
      </div>
    </Container>
  )
}

export default Numbers
