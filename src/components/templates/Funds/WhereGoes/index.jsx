import certificate from '@/assets/images/certificate.png'
import DonateModal from '@/components/modules/DonateModal'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import {ModalHandler} from '@/components/ui/modal'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const WhereGoes = () => {
  const t = useTranslations('funds.whereGoes')

  return (
    <Container
      outerCls="bg-light-gray"
      innerCls="flex flex-col md:flex-row md:gap-20 xl:gap-20 items-center md:justify-between"
    >
      <div className="flex flex-col gap-4 md:gap-8">
        <h2 className="text-light-black uppercase">
          {t('title')}
        </h2>
        <span className="b1 text-black-text">{t('text')}</span>
        <ModalHandler
          handler={<Button variant="secondary" classNames="w-full mt-8 md:w-80 mx-auto md:mx-0">{t('button')}</Button>}
          modalContent={<DonateModal/>}
          modalStyles="bg-light-gray md:bg-pay-gradient"
        />
      </div>
      <Image className="flex-shrink-0 rounded-xl md:rounded-3xl" src={certificate} alt="Certificate"/>
    </Container>
  )
}

export default WhereGoes
