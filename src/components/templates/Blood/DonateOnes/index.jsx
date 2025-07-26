import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const DonateOnes = () => {
  const t = useTranslations('blood.ones')

  return (
    <Container
      outerCls="bg-background"
      innerCls="flex flex-col gap-8 items-center pb-12"
    >
      <h1 className="uppercase text-center text-light-black max-w-screen-md">{t('title')}</h1>
      <a target="_blank" href="https://myaccount.blood.ca/en/join-team/UNIT0126631">
        <Button classNames="w-full md:w-64 mx-auto md:mx-0">{t('button')}</Button>
      </a>
    </Container>
  )
}

export default DonateOnes
