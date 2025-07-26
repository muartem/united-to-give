import event from '@/assets/images/event.png'
import Button from '@/components/ui/button'
import Ul from '@/components/ui/ul'
import {useTranslations} from 'next-intl'
import Image from 'next/image'

const AttendEvent = () => {
  const t = useTranslations('blood.other.attend')

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 xl:gap-20 md:justify-stretch md:items-center"
    >
      <div className="flex flex-col gap-4 md:gap-8 justify-evenly text-black-text">
        <div className="flex flex-col gap-2">
          <h2 className="text-light-black">{t('title')}</h2>
          <span className="b2 font-bold text-primary">{t('date')}</span>
          <span className="b3">{t('location')}</span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="b1">{t('text')}</span>
          <Ul variant="star" lis={[t('li1'), t('li2'), t('li3'), t('li4')]}/>
        </div>
        <Button variant="event">{t('button')}</Button>

      </div>
      <Image className="rounded-xl md:rounded-3xl" src={event} alt={t('title')}/>
    </div>
  )
}

export default AttendEvent
