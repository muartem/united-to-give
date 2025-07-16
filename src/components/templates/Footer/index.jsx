'use client'

import ig from '@/assets/images/ig.png'
import tg from '@/assets/images/tg.png'
import fb from '@/assets/images/fb.png'
import li from '@/assets/images/li.png'
import logo from '@/assets/svg/logo-b.svg'
import menuItems, {menu2Footer} from '@/components/templates/Header/menuItems'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'


const Footer = () => {
	const t = useTranslations('nav')

	return (
		<footer className="px-4 py-10 md:py-16 xl:px-0 mx-auto z-20 w-dvw bg-card-bg text-light-black">
			<div
				className="max-w-screen-xl m-auto px-4 xl:px-0 flex flex-col md:flex-row justify-between items-stretch md:items-start gap-8 text-center md:text-left">
				<div className="flex flex-col gap-4 md:gap-8 items-center">
					<Link className="flex items-center hover:opacity-80" href="/">
						<Image src={logo} alt="Logo"/>
					</Link>
					<div className="flex gap-6 justify-between">
						<a href="#"><Image src={tg} alt="Telegram" className="w-[40px] h-auto" width={40} height={40}/></a>
						<a href="#"><Image src={fb} alt="Facebook" className="w-[40px] h-auto" width={40} height={40}/></a>
						<a href="#"><Image src={ig} alt="Instagram" className="w-[40px] h-auto" width={40} height={40}/></a>
						<a href="#"><Image src={li} alt="LinkedIn" className="w-[48px] h-auto" width={48} height={40}/></a>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					{menuItems(t).map((item) => (
						<Link
							key={`nav-${item.name}`} href={item.href}
							className="block b2 font-bold text-light-black hover:text-black-text"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div className="flex flex-col gap-4">
					{menu2Footer(t).map((item) => (
						<Link
							key={`nav-${item.name}`} href={item.href}
							className="block b2 font-bold text-light-black hover:text-black-text"
						>
							{item.name}
						</Link>
					))}
				</div>
				<div>
					<a href="/" className="block b2 font-bold text-light-black hover:text-black-text">Phone</a>
					<a href="/" className="block b2 font-bold text-light-black hover:text-black-text">Email</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
