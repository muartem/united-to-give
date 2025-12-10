import {hasLocale} from 'next-intl'
import {getRequestConfig} from 'next-intl/server'
import {routing} from './routing'

const messages = {
  en: () => import('./messages/en.json'),
  fr: () => import('./messages/fr.json'),
  ua: () => import('./messages/ua.json')
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  return {
    locale,
    messages: (await messages[locale]()).default
  }
})
