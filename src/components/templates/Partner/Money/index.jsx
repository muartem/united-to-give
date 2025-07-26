import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'

const Packages = () => {
  const t = useTranslations('partner.money')

  return (
    <Container
      outerCls="bg-light-gray"
      innerCls="flex flex-col !gap-2.5 !md:gap-2.5 !xl:gap-2.5"
    >
      <h2 className="text-light-black uppercase text-center">{t('title')}</h2>
      <div className="b2 text-black-text md:mx-16 mb-7 text-center">{t('text')}</div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col gap-4 bg-background p-10 rounded-xl md:rounded-3xl">
          <h3>{t('1.title')}</h3>
          <Ul variant="blood" lis={[t('1.li1'), t('1.li2'), t('1.li3')]}/>
        </div>
        <div className="flex flex-col gap-4 bg-background p-10 rounded-xl md:rounded-3xl">
          <h3>{t('2.title')}</h3>
          <Ul variant="blood" lis={[t('2.li1'), t('2.li2'), t('2.li3')]}/>
        </div>
        <div className="flex flex-col gap-4 bg-background p-10 rounded-xl md:rounded-3xl">
          <h3>{t('3.title')}</h3>
          <Ul variant="blood" lis={[t('3.li1'), t('3.li2'), t('3.li3')]}/>
        </div>
      </div>
    </Container>
  )
}

export default Packages
