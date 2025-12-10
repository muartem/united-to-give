import locales from '@/i18n/locales.js'
import {defineRouting} from 'next-intl/routing'

export const routing = defineRouting({
  locales,
  defaultLocale: 'en',
  localePrefix: 'as-needed'
})
