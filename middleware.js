import { NextResponse } from 'next/server'

const locales = ['en', 'fr', 'de']
const defaultLocale = 'en'
const localesPattern = locales.join('|')

export function middleware(request) {
	const { pathname } = request.nextUrl

	// Если путь уже содержит локаль — пропускаем
	if (new RegExp(`^\/(${localesPattern})(\/|$)`).test(pathname)) {
		return NextResponse.next()
	}

	// Исключаем служебные пути
	if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
		return NextResponse.next()
	}

	// Делаем редирект с локалью
	const url = request.nextUrl.clone()
	url.pathname = `/${defaultLocale}${pathname}`

	return NextResponse.redirect(url)
}

export const config = {
	matcher: ['/', '/:path*'],
}
