'use client'

import { usePathname, useRouter } from 'next/navigation'

export default function LanguageSwitcher() {
	const router = useRouter()
	const pathname = usePathname()

	const changeLang = (locale) => {
		const segments = pathname.split('/')
		segments[1] = locale
		router.push(segments.join('/'))
	}

	return (
		<div>
			<button onClick={() => changeLang('en')}>EN</button>
			<button onClick={() => changeLang('fr')}>FR</button>
			<button onClick={() => changeLang('ua')}>UA</button>
		</div>
	)
}
