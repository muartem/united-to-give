import mono from '@/assets/images/mono.png'
import qr from '@/assets/images/qr.png'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const DonateModal = () => {
  const t = useTranslations('modals.donate')

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[7fr_4fr] gap-8 md:gap-40 md:items-stretch h-full justify-center"
    >
      <div className="flex flex-col gap-8 md:gap-20">
        <div>
          <h2 className="text-light-black uppercase font-bold">{t('title')}</h2>
          <span className="b1 text-black-text">{t('text')}</span>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-primary font-bold">E-transfer</h3>
            <span className="b1 text-black-text">donateuth@gmail.com</span>
          </div>
          <div>
            <h3 className="text-primary font-bold">PayPal</h3>
            <span className="b1 text-black-text">donateuth@gmail.com</span>
          </div>
          <div>
            <h3 className="text-primary font-bold">United Together Humanitarian Relief Inc. Transit</h3>
            <p className="b1 text-black-text">Transit: 02008</p>
            <p className="b1 text-black-text">Institution: 010</p>
            <p className="b1 text-black-text">Account: 4816218</p>
            <p className="b1 text-black-text">Swift Code: CIBCCATT</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 justify-center items-center pb-10">
        <a className="mx-auto p-4 hover:opacity-80" href="https://send.monobank.ua/jar/8xVHdLMwrZ" target="_blank">
          <Image src={qr} width={265} height={265} alt="qr monobank"/>
        </a>
        <div className="flex gap-2 justify-center items-center">
          <Image src={mono} width={46} height={46} alt="monobank"/>
          <div>
            <h3 className="text-black-text font-bold flex items-center">{t('mono')}</h3>
            <span className="b1 text-black-text">{t('scan')}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DonateModal
