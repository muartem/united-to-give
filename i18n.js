import locales from '@/i18n/locales'
import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'


export default getRequestConfig(async ({ locale }) => {
	if (!locales.includes(locale)) notFound()

	return {
		messages: (await import(`./messages/${locale}.json`)).default,
	}
})
