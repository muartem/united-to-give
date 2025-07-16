import { NextResponse } from 'next/server'
import locales from '@/i18n/locales' // ['en', 'fr', 'de']

const defaultLocale = 'en'
const localesPattern = locales.join('|')

export function middleware(request) {
	const { pathname } = request.nextUrl

	// Если путь уже начинается с локали, ничего не делаем
	if (new RegExp(`^\/(${localesPattern})(\/|$)`).test(pathname)) {
		return NextResponse.next()
	}

	// Если путь это статичные файлы, api или префиксы (например, /_next/), тоже пропускаем
	if (
		pathname.startsWith('/_next') ||
		pathname.startsWith('/api') ||
		pathname.startsWith('/static')
	) {
		return NextResponse.next()
	}

	// Иначе делаем редирект на путь с локалью по умолчанию
	const url = request.nextUrl.clone()
	url.pathname = `/${defaultLocale}${pathname}`

	return NextResponse.redirect(url)
}

export const config = {
	matcher: ['/', '/:path*'], // применяем middleware ко всем путям
}
