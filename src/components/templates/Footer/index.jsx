'use client'

import fb from '@/assets/images/fb.png'
import ig from '@/assets/images/ig.png'
import li from '@/assets/images/li.png'
import tg from '@/assets/images/tg.png'
import logo from '@/assets/svg/logo-b.svg'
import ChallengeModal from '@/components/modules/ChallengeModal/index'
import menuItems from '@/components/templates/Header/menuItems'
import {ModalHandler} from '@/components/ui/modal'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'


const Footer = ({locale}) => {
  const t = useTranslations('nav')

  return (
    <footer className="px-4 py-10 md:py-16 xl:px-0 mx-auto z-20 w-dvw bg-card-bg text-light-black">
      <div
        className="max-w-screen-xl m-auto px-4 xl:px-0 flex flex-col md:flex-row justify-between items-stretch md:items-start gap-8 text-center md:text-left">
        <div className="flex flex-col gap-4 md:gap-8 items-center">
          <Link className="flex items-center hover:opacity-80" href="#">
            <Image src={logo} alt="Logo"/>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {menuItems(t).map((item) => (
            <Link
              key={`nav-${item.name}`} href={`/${locale}${item.href}`}
              className="block b2 p-1 font-bold text-light-black hover:text-black-text"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <a
            href="https://www.blood.ca/en/blood/am-i-eligible-donate-blood"
            target="_blank"
            className="block b2 p-1 font-bold text-light-black hover:text-black-text"
          >
            {t('Availability')}
          </a>
          <ModalHandler
            handler={<span className="block b2 p-1 font-bold text-light-black hover:text-black-text">
              {t('Challenge')}
            </span>}
            modalContent={<ChallengeModal/>}
            modalStyles="md:!pb-0"
          />
        </div>
        <div className="flex flex-col gap-4">
          <a href="tel:+19053018321" className="block b2 p-1 font-bold text-light-black hover:text-black-text">+1 (905)
            301-8321</a>
          <a href="mailto:unitedtogive@gmail.com"
            className="block b2 p-1 font-bold text-light-black hover:text-black-text">UnitedToGive@gmail.com</a>
          <div className="p-1 flex gap-6 justify-between">
            <a className="hover:brightness-110" target="_blank" href="https://t.me/unitedtogive_donors">
              <Image src={tg}
                alt="Telegram"
                className="w-[40px] h-auto"
                width={40}
                height={40}/>
            </a>
            <a className="hover:brightness-110" target="_blank" href="https://www.facebook.com/united.to.give">
              <Image src={fb} alt="Facebook"
                className="w-[40px] h-auto"
                width={40} height={40}
              />
            </a>
            <a className="hover:brightness-110" target="_blank" href="https://www.instagram.com/united_to_give"><Image
              src={ig} alt="Instagram" className="w-[40px] h-auto" width={40} height={40}/></a>
            <a className="hover:brightness-110" target="_blank"
              href="https://www.linkedin.com/company/united-to-give"><Image src={li} alt="LinkedIn"
                className="w-[40px] h-auto" width={48}
                height={40}/></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
