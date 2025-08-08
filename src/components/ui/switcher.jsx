'use client'

import locales from '@/i18n/locales'
import { usePathname, useRouter } from 'next/navigation'

const LanguageSwitcher = ({ locale, classNames }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleLanguageChange = (e) => {
    const newLocale = e.target.value
    const path = pathname.split('/').slice(2).join('/')
    router.push(`/${newLocale}/${path}`)
  }

  return (
    <select
      aria-label="Language Switcher"
      value={locale}
      onChange={handleLanguageChange}
      className={`!hidden rounded-md px-4 py-2 bg-transparent hover:outline-none focus:outline-none ${classNames}`}
    >
      {locales.map( locale => (<option key={locale} value={locale}>{locale.toLocaleUpperCase()}</option>))}
    </select>
  )
}

export default LanguageSwitcher
