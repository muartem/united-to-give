import HeroBg from '@/assets/images/hero-bg.jpg'
import Button from '@/components/ui/button'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const MainHero = () => {
  const t = useTranslations('main.hero')

  return (
    <main className="md:h-[752px] w-dvw bg-main-gradient md:bg-bw-gradient text-light-black">
      <div
        className="relative max-w-screen-xl m-auto h-full flex justify-between items-stretch text-center md:text-left flex-col md:flex-row">
        <div className="flex flex-col w-auto md:w-1/2 justify-between pt-16 pb-12 px-6 xl:px-16 md:!pl-2">
          <div>
            <h1 className="uppercase text-black-text mb-0.5 md:mr-16">
              {t('join')}
              <span className="text-primary">{t('bd')}</span>
              {t('initiative')}
            </h1>
            <div className="b2 text-light-black mb-6 md:mb-4 md:pr-36">
              {t('text1')}
              <span className="text-primary">{t('date')}</span>
              {t('text2')}
            </div>
          </div>
          <div>
            <a className="block w-full md:w-max mb-4 md:mb-12" target="_blank" href="https://myaccount.blood.ca/en/join-team/UNIT0126631">
              <Button classNames="w-full md:w-64 mx-auto md:mx-0 !px-16 !py-4">{t('donateBtn')}</Button>
            </a>
            <div className="flex gap-4 md:gap-10 h-auto flex-col md:flex-row">
              <div className="flex-1">
                <h2 className="text-primary">
                  {t('donors')}
                </h2>
                <div className="b2 text-black-text">
                  {t('text3')}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-primary">
                  {t('funds')}
                </h2>
                <div className="b2 text-black-text">
                  {t('text4')}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-auto md:w-1/2 relative">
          <Image src={HeroBg} alt="Hero background" height={568}
            className="w-full md:w-[50dvw] md:max-w-[50dvw] h-full object-cover object-center absolute top-0 left-0"
          />
          <div className="flex flex-col pt-16 pb-12 px-6 xl:px-16 relative z-10 w-full">
            <h1 className="uppercase text-background mb-[2px]">
              <span className="text-primary">{t('attend')}</span>
              {t('charity')}
            </h1>
            <div className="b2 text-background mb-[29px] md:pr-24">
              {t('text5')}
            </div>
            <Button disabled variant="event" classNames="invisible mb-4 md:mb-12 w-full md:w-max !px-16 !py-4">
              {'Soon...' ?? t('attendBtn')}
            </Button>
            <div className="flex gap-4 md:gap-10 md:h-[190px] h-auto flex-col md:flex-row">
              <div className="flex-1">
                <h2 className="text-golden-yellow uppercase">
                  {t('speakers')}
                </h2>
                <div className="b2 text-background">
                  {t('text6')}
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-golden-yellow">
                  {t('attendee')}
                </h2>
                <div className="b2 text-background">
                  {t('text7')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainHero

