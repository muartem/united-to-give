import createMiddleware from 'next-intl/middleware'
import locales from '@/i18n/locales'

export default createMiddleware({
	locales,
	defaultLocale: 'en',
})

export const config = {
	matcher: ['/', `/(${locales.join('|')})/:path*`],
}
