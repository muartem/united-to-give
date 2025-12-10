import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const MainWhatIs = () => {
  const t = useTranslations('main.what')

  return (
    <Container
      outerCls="bg-light-gray"
      innerCls="relative flex-col md:flex-row justify-between items-center text-center md:text-left"
    >
      <div className="flex-1">
        <h1>
          {t('is')}
          <div className="text-primary">“United to Give”?</div>
        </h1>
      </div>
      <div className="flex flex-col gap-6 flex-1">
        <div className="b1">
          {t('text1')}
        </div>
        <div className="b1">
          {t('text2')}
        </div>
        <div className="b2 font-bold">
					Volodymyr Chaus, Sofiia Orlovska
        </div>
      </div>
    </Container>
  )
}

export default MainWhatIs
