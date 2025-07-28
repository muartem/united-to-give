import Container from '@/components/ui/container'
import {useTranslations} from 'next-intl'

const Video = () => {
  const t = useTranslations('blood.video')

  return (
    <Container
      outerCls="text-light-black bg-white"
      innerCls="text-black-text"
    >
      <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/vDHgvDXHSt0?si=9DCjew9rTKszP1Yc"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>
      <div className="flex flex-col">
        <h2 className="mb-2">{t('title')}</h2>
        <span className="b2 text-black-text">{t('text1')}</span>
        <span className="b2 text-black-text">{t('text2')}</span>
      </div>
    </Container>
  )
}

export default Video
