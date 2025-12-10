import CbsLogo from '@/assets/images/partners/cbs.png'
import UtLogo from '@/assets/images/partners/ut.png'
import UccLogo from '@/assets/images/partners/ucc.png'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const MainScale = () => {
  const t = useTranslations('main.scale')

  return (
    <Container
      outerCls="bg-background"
      innerCls="relative text-center md:text-left"
    >
      <h2 className="uppercase text-light-black text-center">
        {t('title')}
      </h2>
      <div>
        <div className="b1 text-light-black text-center mb-2">
					📅 {t('duration')}
        </div>
        <div className="b1 text-light-black text-center">
					👥 {t('target')}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-2">
            <Image src={CbsLogo} alt="Hero background" width={236} height={48}/>
          </div>
          <div className="b2 font-bold">
            {t('1.title')}
          </div>
          <div className="b2 text-black-text">
            {t('1.text')}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-2">
            <Image className="rounded-full" src={UtLogo} alt="Hero background" width={94} height={94}/>
          </div>
          <div className="b2 font-bold">
            {t('2.title')}
          </div>
          <div className="b2 text-black-text">
            {t('2.text')}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-2">
            <Image src={UccLogo} alt="Hero background" width={94} height={94}/>
          </div>
          <div className="b2 font-bold">
            {t('3.title')}
          </div>
          <div className="b2 text-black-text">
            {t('3.text')}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div
            className="flex justify-center items-center h-[140px] px-[10px] bg-light-gray rounded-xl md:rounded-3xl mb-2">
            <Image src={CbsLogo} alt="Hero background" width={236} height={48}/>
          </div>
          <div className="b2 font-bold">
            {t('4.title')}
          </div>
          <div className="b2 text-black-text">
            {t('4.text')}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default MainScale
