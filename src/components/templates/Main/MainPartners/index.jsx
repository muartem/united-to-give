import CbsLogo from '@/assets/images/partners/cbs.png'
import UccLogo from '@/assets/images/partners/ucc.png'
import UtLogo from '@/assets/images/partners/ut.png'
import Container from '@/components/ui/container'
import Image from 'next/image'

const MainPartners = () => (
  <Container
    outerCls="bg-background"
    innerCls="!flex-row justify-between items-center gap-10 overflow-x-auto scrollbar-hide"
  >
    <Image className="w-auto h-16" src={UtLogo} alt="UTH Logo"/>
    <Image className="w-auto h-16" src={CbsLogo} alt="CBS Lgog"/>
    <Image className="w-auto h-16" src={UccLogo} alt="UCC Logo"/>
    <Image className="w-auto h-16" src={UtLogo} alt="UTH Logo"/>
    <Image className="w-auto h-16" src={CbsLogo} alt="CBS Lgog"/>
    <Image className="w-auto h-16" src={UccLogo} alt="UCC Logo"/>
  </Container>
)

export default MainPartners

