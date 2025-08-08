import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'

const Packages = () => {
  const t = useTranslations('partner.packages')

  return (
    <Container
      outerCls="bg-light-gray"
      innerCls="relative flex flex-col gap-10"
    >
      <div id="packages" className="absolute -top-10 md:-top-16"/>
      <h2 className="text-light-black uppercase text-center">{t('title')}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div className="flex flex-col gap-2 bg-background p-10 rounded-xl md:rounded-3xl">
          <h3>{t('1.title')}</h3>
          <span className="b2 text-black-text">{t('1.desc')}</span>
          <span className="flex gap-2 my-2">
            <h1 className="text-primary">{t('1.price')}</h1>
            <span className="b2 text-light-black">CAD</span>
          </span>
          <Ul variant="star" lis={[t('1.li.1'), t('1.li.2')]}/>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.1.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.1.1')}</li>
              <li>{t('1.perks.1.2')}</li>
              <li>{t('1.perks.1.3')}</li>
            </ul>
          </div>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.2.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.2.1')}</li>
              <li>{t('1.perks.2.2')}</li>
            </ul>
          </div>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.3.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.3.1')}</li>
            </ul>
          </div>
          <div className="p-2">
            <div className="b2 font-bold">{t('1.perks.4.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.4.1')}</li>
            </ul>
          </div>
          <Button classNames="mt-2" variant="secondary">{t('1.button')}</Button>
        </div>
        <div className="flex flex-col gap-2 bg-background p-10 rounded-xl md:rounded-3xl">
          <h3>{t('1.title')}</h3>
          <span className="b2 text-black-text">{t('1.desc')}</span>
          <span className="flex gap-2 my-2">
            <h1 className="text-primary">{t('1.price')}</h1>
            <span className="b2 text-light-black">CAD</span>
          </span>
          <Ul variant="star" lis={[t('1.li.1'), t('1.li.2')]}/>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.1.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.1.1')}</li>
              <li>{t('1.perks.1.2')}</li>
              <li>{t('1.perks.1.3')}</li>
            </ul>
          </div>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.2.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.2.1')}</li>
              <li>{t('1.perks.2.2')}</li>
            </ul>
          </div>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.3.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.3.1')}</li>
            </ul>
          </div>
          <div className="p-2">
            <div className="b2 font-bold">{t('1.perks.4.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.4.1')}</li>
            </ul>
          </div>
          <Button classNames="mt-2" variant="secondary">{t('1.button')}</Button>
        </div>
        <div className="flex flex-col gap-2 bg-background p-10 rounded-xl md:rounded-3xl">
          <h3>{t('1.title')}</h3>
          <span className="b2 text-black-text">{t('1.desc')}</span>
          <span className="flex gap-2 my-2">
            <h1 className="text-primary">{t('1.price')}</h1>
            <span className="b2 text-light-black">CAD</span>
          </span>
          <Ul variant="star" lis={[t('1.li.1'), t('1.li.2')]}/>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.1.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.1.1')}</li>
              <li>{t('1.perks.1.2')}</li>
              <li>{t('1.perks.1.3')}</li>
            </ul>
          </div>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.2.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.2.1')}</li>
              <li>{t('1.perks.2.2')}</li>
            </ul>
          </div>
          <div className="border-b p-2">
            <div className="b2 font-bold">{t('1.perks.3.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.3.1')}</li>
            </ul>
          </div>
          <div className="p-2">
            <div className="b2 font-bold">{t('1.perks.4.title')}:</div>
            <ul className="list-disc ml-6 text-black-text">
              <li>{t('1.perks.4.1')}</li>
            </ul>
          </div>
          <Button classNames="mt-2" variant="secondary">{t('1.button')}</Button>
        </div>
      </div>
    </Container>
  )
}

export default Packages
