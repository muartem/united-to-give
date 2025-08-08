import ig from '@/assets/images/ig.png'
import impact from '@/assets/images/impact.png'
import ArrowRight from '@/assets/svg/Arrow-right'
import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const SeeImpact = () => {
  const t = useTranslations('funds.seeImpact')

  return (
    <Container outerCls="bg-light-gray md:bg-transparent">
      <div
        className="
				rounded-xl md:rounded-3xl grid grid-cols-1 gap-6
				md:bg-light-gray md:grid-cols-2 md:gap-0 md:justify-stretch md:items-center
			"
      >
        <div className="md:pl-20 md:py-20 ">
          <div className="flex flex-col gap-4">
            <h1 className="text-light-black uppercase text-center md:text-left">{t('title')}</h1>
            <span className="b1 text-black-text mb-2">{t('description')}</span>
            <Ul variant="blood" classNames="mb-6" lis={[t('li1'), t('li2'), t('li3')]}/>
            <a target="_blank" href="https://www.instagram.com/united_to_give"
							 className="flex b2 text-primary font-bold justify-end md:justify-start items-center gap-4 hover:text-dark-primary">
              <Image src={ig} alt="instagram"/>
              {t('iglink')}
              <ArrowRight className="[&>path:hover]:fill-dark-primary -ml-2"/>
            </a>
          </div>
        </div>
        <Image
          className="
					rounded-xl md:rounded-l-full md:rounded-r-[100%]
					w-full h-full object-cover
				"
          src={impact}
          alt={t('title')}
        />
      </div>
    </Container>
  )
}

export default SeeImpact
