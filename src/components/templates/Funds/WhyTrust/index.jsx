import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const WhyTrust = () => {
  const t = useTranslations('funds.whyTrust')

  return (
    <Container
      innerCls="flex flex-col items-stretch gap-10"
    >
      <h2 className="text-light-black uppercase text-center">{t('title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-8 text-black-text text-center">
        <div>
          <h3 className="text-light-black mb-2">{t('1.title')}</h3>
          {t('1.text')}
        </div>
        <div>
          <h3 className="text-light-black mb-2">{t('2.title')}</h3>
          {t('2.text')}
        </div>
        <div>
          <h3 className="text-light-black mb-2">{t('3.title')}</h3>
          {t('3.text')}
        </div>
      </div>
    </Container>
  )
}

export default WhyTrust
