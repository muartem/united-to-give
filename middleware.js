import { NextResponse } from 'next/server'

export const locales = ['en', 'fr', 'ua']

function getLocale(request) {
	return 'en'
}

export function middleware(request) {
	const { pathname } = request.nextUrl
	const pathnameHasLocale = locales.some(
		(locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
	)
	console.log('sdklnkds')
	if (pathnameHasLocale) return

	// Redirect if there is no locale
	const locale = getLocale(request)
	request.nextUrl.pathname = `/${locale}${pathname}`

	// e.g. incoming request is /products
	// The new URL is now /en-US/products
	return NextResponse.redirect(request.nextUrl)
}
