'use client'

import arrowLogo from '@/assets/svg/arrow-down.svg'
import logo from '@/assets/svg/logo.svg'
import LanguageSwitcher from '@/components/ui/switcher'
import {useTranslations} from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import menuItems from './menuItems'
import {  useState } from 'react'


const Header = ({ locale }) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
	const t = useTranslations('nav');

	return (
		<header className="sticky px-4 py-5 xl:px-0 top-0 inset-x-0 mx-auto z-50 w-dvw bg-light-black text-white" >
			<div className="max-w-screen-xl m-auto flex items-center justify-between">
				<div className="flex items-center">
					<Link href="/">
						<Image src={logo} alt="HRUN Logo" width={164} height={82} className="w-24 md:w-40"/>
					</Link>
				</div>
				<button
					type="button"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className="
						w-12 h-12
						p-3
						rounded-full display-none
						block md:hidden
					"
				>
					<div className="relative w-full h-full">
						<div
							className={`absolute left-1/2 -translate-x-1/2 w-full h-0.5 bg-white rounded-full transition-all ease-in-out duration-150 ${isMenuOpen ? 'top-[calc(50%-1px)] rotate-45 delay-200' : 'top-1'}`}
						/>
						<div
							className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
						/>
						<div
							className={`absolute left-1/2 -translate-x-1/2 w-full h-0.5 bg-white rounded-full transition-all ease-in-out duration-150 ${isMenuOpen ? 'bottom-[calc(50%-1px)] -rotate-45 delay-200' : 'bottom-1'}`}
						/>
					</div>
				</button>
				<nav
					className={`
				    b2 text-white flex absolute top-full inset-x-0 w-full flex-col bg-light-black py-0
				    transition-[opacity,visibility,top] duration-300 shadow-md text-left items-stretch px-6 gap-0
				    ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
				    md:relative md:flex-row md:bg-transparent md:py-0 md:shadow-none md:px-0 md:gap-12 md:opacity-100 md:visible
				    md:items-center md:justify-center
				  `}
				>
					{menuItems(t).map((item) => (
						item.submenu ? (
							<div
								key={`nav-${item.name}`}
								className="flex flex-col relative border-b border-grey-100 py-3 md:border-none md:py-0"
								onMouseEnter={() => {
									if (!isMenuOpen) {
										setIsSubmenuOpen(true)
									}
								}}
								onMouseLeave={() => {
									if (!isMenuOpen) {
										setIsSubmenuOpen(false)
									}
								}}
							>
								<button
									onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
									className="flex items-center gap-0.5 w-full md:w-max justify-between"
								>
									<span>{item.name}</span>
									<Image
										src={arrowLogo} alt="Arrow icon" width={24} height={24}
										className={`transition-all duration-300 ${isSubmenuOpen ? 'translate-y-0.5 rotate-180' : 'translate-y-0'}`}
									/>
								</button>
								<div
									className={`
										flex flex-col gap-1.5
                    overflow-hidden border-none px-4 md:px-8 w-max
                    md:absolute md:top-full md:left-1/2 md:-translate-x-1/2 md:bg-light-black
								    md:border md:border-blue md:rounded-lg
								    ${isSubmenuOpen ? 'opacity-100 max-h-max visible py-2 md:py-4' : 'opacity-0 h-0 invisible md:py-0'}
								    transition-all duration-300
									`}
								>
									{item.submenu.map((subItem) => (
										<Link
											key={`nav-submenu-${subItem.name}`} href={subItem.href}
											className="block whitespace-nowrap text-white hover:text-dark-gray hover:no-underline"
										>
											{subItem.name}
										</Link>
									))}
								</div>
							</div>
						) : (
							<Link
								key={`nav-${item.name}`} href={item.href}
								className="block text-white hover:text-dark-gray border-b last:border-none border-grey-100 md:border-none py-3 md:py-0 hover:no-underline"
							>
								{item.name}
							</Link>
						)
					))}
					<div className="md:hidden p-6 m-auto">
						<LanguageSwitcher locale={locale}/>
					</div>
				</nav>
				<LanguageSwitcher classNames='hidden md:block' locale={locale}/>
			</div>
		</header>
	)
}

export default Header
