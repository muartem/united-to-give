import CbsLogo from '@/assets/images/partners/cbs.svg'
import UtLogo from '@/assets/images/partners/ut.svg'
import Container from '@/components/ui/container'
import Image from 'next/image'

const MainPartners = () => {
  return (
    <Container
      outerCls="bg-background"
      innerCls="!flex-row justify-between items-center gap-10 overflow-x-auto scrollbar-hide"
    >
      <Image src={CbsLogo} alt="Hero background" width={191} height={38}/>
      <Image src={UtLogo} alt="Hero background" width={57} height={60}/>
      <Image src={CbsLogo} alt="Hero background" width={191} height={38}/>
      <Image src={UtLogo} alt="Hero background" width={57} height={60}/>
      <Image src={CbsLogo} alt="Hero background" width={191} height={38}/>
      <Image src={UtLogo} alt="Hero background" width={57} height={60}/>
      <Image src={CbsLogo} alt="Hero background" width={191} height={38}/>

    </Container>
  )
}

export default MainPartners

