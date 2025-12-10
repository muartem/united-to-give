import GoalImage from '@/assets/images/goal.png'
import GirlSun from '@/assets/images/girls-sunflowers.png'
import GirlFun from '@/assets/images/young-adults-having-fun-while-folk-dancing.png'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const MainGoals = () => {
  const t = useTranslations('main.goals')

  return (
    <Container
      outerCls="bg-background"
      innerCls="relative flex flex-col gap-10"
    >
      <h2 className="text-[32px] font-bold text-center uppercase text-light-black">
        {t('title')}
      </h2>
      <div className="flex justify-between items-stretch md:items-center gap-10 md:gap-20 flex-col md:flex-row">
        <div className="flex-1 order-2 md:order-1">
          <h3 className="font-bold text-light-black mb-4">
            {t('1.title')}
          </h3>
          <div className="b2 text-black-text mb-4">
            {t('1.text1')}
          </div>
          <div className="b2 text-black-text">
            {t('1.text2')}
          </div>
        </div>
        <Image className="flex-1 order-1 md:order-2 h-max w-auto md:h-auto rounded-xl md:rounded-3xl" src={GirlSun}
							 alt="Goal Image"
        />
      </div>
      <div className="flex justify-between items-stretch md:items-center gap-10 md:gap-20 flex-col md:flex-row">
        <Image className="flex-1 h-max w-auto md:h-auto rounded-xl md:rounded-3xl" src={GirlFun}
							 alt="young-adults-having-fun-while-folk-dancing"
        />
        <div className="flex-1">
          <h3 className="text-light-black mb-4">
            {t('2.title')}
          </h3>
          <div className="b2 text-black-text mb-4">
            {t('2.text1')}
          </div>
          <div className="b2 text-black-text">
            {t('2.text2')}
          </div>
        </div>
      </div>
      <div className="flex justify-between items-stretch md:items-center gap-20 flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-4 order-2 md:order-1">
          <h3 className="text-light-black">
            {t('3.title')}
          </h3>
          <div className="b2 text-black-text">
            {t('3.text1')}
            <a target="_blank" href="https://utogetherhr.com" className="text-mid-link">
              {t('3.uthr')}
            </a>
            {t('3.text2')}
          </div>
          <Ul variant="blood" lis={[
            t('3.li1'), t('3.li2'), t('3.li3')
          ]}/>
          <Link className="flex items-center w-full" href={'/donate-funds'}>
            <Button classNames="w-full md:w-max !px-20 mt-2" variant="secondary">
              {t('3.btn')}
            </Button>
          </Link>
        </div>
        <Image className="flex-1 order-1 md:order-2 h-max w-auto md:h-auto rounded-xl md:rounded-3xl" src={GoalImage}
          alt="Goal Image"
        />
      </div>
    </Container>
  )
}

export default MainGoals
