import funds from '@/assets/images/fundsImg.png'
import DonateModal from '@/components/modules/DonateModal/index.jsx'
import Button from '@/components/ui/button'
import {ModalHandler} from '@/components/ui/modal'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const FundsMain = () => {
  const t = useTranslations('funds.main')

  return (
    <main
      className="h-[calc(100dvh-88px)] md:h-[752px] w-dvw bg-main-gradient text-light-black md:overflow-hidden"
    >
      <div
        className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left"
      >
        <div
          className="order-2 max-h-dvh md:-mr-72 absolute opacity-30 w-dvw flex-none pt-8 h-full md:pt-0 md:static md:flex md:opacity-100 md:w-max">
          <Image className="object-cover h-full md:w-full" src={funds} alt={'funds'}/>
        </div>
        <div
          className="order-1 max-w-[550px] relative flex justify-center flex-col gap-6 py-16 px-4 xl:px-0 md:py-24"
        >
          <h1 className="uppercase font-normal">
            {t('Help')}
            <span className="text-golden-yellow nth">{t('U')}</span>
            <span className="text-mid-link nth">{t('k')}</span>
            {t('raine')}
          </h1>
          <span className="b1 text-black-text">
            {t('subTitle')}
          </span>
          <Ul variant="blood" lis={[t('li1'), t('li2'), t('li3')]}/>
          <ModalHandler
            handler={<Button
              variant="secondary"
              classNames="w-full mt-8 md:w-80 mx-auto md:mx-0"
            >{t('button')}</Button>}
            modalContent={<DonateModal/>}
            modalStyles="bg-light-gray md:bg-pay-gradient"
          />
        </div>
      </div>
    </main>
  )
}

export default FundsMain
