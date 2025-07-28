import logo from '@/assets/svg/logo-b.svg'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import ContactForm from './form'

const HaveQuestions = () => {
  const t = useTranslations('partner.haveQ')

  return (
    <Container
      outerCls="text-light-black bg-background"
      innerCls="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-top"
    >
      <div className="px-6 md:px-0 py-0 md:py-10 flex flex-col gap-4 md:gap-8">
        <Image src={logo} alt="Logo"/>
        <div className="b1 text-black-text">{t('support')}</div>
        <div className="b3 text-black-text">
          {t('still')}
          <a className="block text-black-text underline" href="tel:+13065351110">+1(306) 535-1110</a>
          <a className="block text-black-text underline" href="mailto:admin@utogetherhr.com">admin@utogetherhr.com</a>
          <a className="block text-black-text underline" href="https://utogetherhr.com"
						 target="_blank">https://utogetherhr.com</a>
        </div>
      </div>
      <ContactForm/>
    </Container>
  )
}

export default HaveQuestions
