import cbsLogo from '@/assets/images/cbs_logo.png'
import uthrLogo from '@/assets/images/uthr_logo.png'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const Partners = () => {
  const t = useTranslations('partner.partners')

  return (
    <Container
      outerCls="bg-background"
      innerCls="flex flex-col gap-6 md:gap-10 items-stretch"
    >
      <h2 className="uppercase text-center text-light-black">{t('title')}</h2>
      <div className="flex flex-row gap-10 flex-wrap [&>img]:w-auto [&>img]:max-h-12 md:[&>img]:max-h-16">
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={uthrLogo} alt="UTHR Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={uthrLogo} alt="UTHR Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={uthrLogo} alt="UTHR Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={uthrLogo} alt="UTHR Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={uthrLogo} alt="UTHR Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
        <Image src={uthrLogo} alt="UTHR Logo"/>
        <Image src={cbsLogo} alt="CBS Logo"/>
      </div>
    </Container>
  )
}

export default Partners
