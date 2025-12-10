'use client'

import LiIcon from '@/assets/images/li.png'
import BhIcon from '@/assets/images/bh.png'
import TgIcon from '@/assets/images/tg.png'
import IgIcon from '@/assets/images/icons/ig.svg'
import Button from '@/components/ui/button'
import Container from '@/components/ui/container.jsx'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import {useState} from 'react'
import team from './team.js'

const MainTeam = () => {
  const t = useTranslations('main.team')
  const [isExpanded, setExpanded] = useState(false)

  return (
    <Container
      outerCls="bg-background"
      innerCls="relative"
    >
      <div className="flex flex-col md:items-center md:flex-row gap-4 md:gap-20">
        <h1 className="text-light-black uppercase md:text-nowrap md:max-w-max">
          {t('who')}
          <div className="text-primary">{t('team')}</div>
        </h1>
        <div className="flex-1">
          <div className="b1 text-black-text">
            {t('text')}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
        {(isExpanded ? team : team.slice(0, 6)).map((item, index) => (
          <div className="flex flex-col gap-2 justify-between items-center md:items-stretch text-center md:text-left" key={item.name + index}>
            <Image src={item.image} alt={item.name} width={200} height={200}
              className="object-cover rounded-xl md:rounded-3xl mb-4"
            />
            <div className="b2 text-light-black font-bold">
              {item.name}
            </div>
            <div className="flex-1 b3 text-black-text mb-2">
              {item.description}
            </div>
            <div className="flex items-center gap-4">
              {item.igLink && <a className="hover:brightness-110" href={item.igLink} target="_blank" rel="noopener noreferrer">
                <Image src={IgIcon} alt="IG" width={24} height={24}/>
              </a>}
              {item.liLink && <a className="hover:brightness-110" href={item.liLink} target="_blank" rel="noopener noreferrer">
                <Image src={LiIcon} alt="LI"  width={24} height={24}/>
              </a>}
              {item.bhLink && <a className="hover:brightness-110" href={item.bhLink} target="_blank" rel="noopener noreferrer">
                <Image src={BhIcon} alt="BH" width={24} height={24}/>
              </a>}
              {item.tgLink && <a className="hover:brightness-110" href={item.tgLink} target="_blank" rel="noopener noreferrer">
                <Image src={TgIcon} alt="TG" width={24} height={24}/>
              </a>}
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => setExpanded((prevState) => !prevState)}
        classNames="mx-auto md:w-max px-20 py-4"
        variant="secondary"
        customPX
      >
        {!isExpanded ? t('ext') : t('col')}
      </Button>
    </Container>
  )
}

export default MainTeam
