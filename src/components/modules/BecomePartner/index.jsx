import women from '@/assets/images/women.png'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const BecomePartner = () => {
  const t = useTranslations('blood.other.partner')

  return (
    <div
      className="
				rounded-xl md:rounded-3xl md:bg-background grid grid-cols-1 gap-6
				md:grid-cols-[2fr_3fr] md:gap-0 md:justify-stretch md:items-stretch
			"
    >
      <div>
        <div className="flex flex-col gap-4 text-black-text md:pl-20 md:py-20 md:w-[120%]">
          <h1 className="text-light-black uppercase">{t('title')}</h1>
          <span className="b1 md:mb-8">{t('text')}</span>
          {/*<Link className="flex items-center w-max" href={'/become-partner'}>
            <Button variant="secondary" classNames="!px-16 !py-4">{t('button')}</Button>
          </Link>*/}
        </div>
      </div>
      <Image
        className="
					rounded-xl md:rounded-l-none md:rounded-r-3xl
					w-full h-full object-cover md:[mask-image:linear-gradient(to_right,transparent,white_60%)]
				"
        src={women}
        alt={t('title')}
      />
    </div>
  )
}

export default BecomePartner
