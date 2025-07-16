import { getRequestConfig } from 'next-intl/server'

export default getRequestConfig(async ({ headers }) => {
	const locale = headers?.get('x-locale') || 'en'

	return {
		locale,
		messages: (await import(`./messages/${locale}.json`)).default
	}
})
