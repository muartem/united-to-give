import Footer from '@/components/templates/Footer'
import Header from '@/components/templates/Header'
import locales from '@/i18n/locales.js'
import {Analytics} from '@vercel/analytics/next'
import {hasLocale} from 'next-intl'
import {NextIntlClientProvider} from 'next-intl'
import '@/app/globals.css'
import {notFound} from 'next/navigation'


export const metadata = {
  title: 'United to Give - Ukrainian Blood Donation Campaign in Canada',
  manifest: '/manifest.json',
  description:
    'Ukrainians across Canada are donating blood to give back to the country that welcomed us. Join us in supporting Canadian patients and showing appreciation through meaningful action.',
  keywords: [
    'United to Give',
    'blood donation',
    'Ukrainian Canadians',
    'donate blood Canada',
    'gratitude campaign',
    'Canadian Blood Services',
    'Ukrainian community Canada',
    'volunteering',
    'Canada Ukraine',
  ],
  openGraph: {
    title: 'United to Give – Ukrainian Blood Donation Campaign',
    description:
      'Join Ukrainians across Canada in donating blood to support Canadian patients and express gratitude.',
    url: 'https://www.unitedtogive.ca/',
    siteName: 'United to Give',
    type: 'website',
    locale: 'en_CA',
    manifest: '/manifest.json',
    icons: {
      icon: [
        { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { url: '/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      apple: '/icons/apple-touch-icon.png',
    },
    images: [
      {
        url: '/og-image.png',
        width: 1526,
        height: 877,
        alt: 'United to Give – Blood Donation Campaign',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.unitedtogive.ca/',
    languages: {
      'en-CA': 'https://www.unitedtogive.ca/',
      'fr-CA': 'https://www.unitedtogive.ca/fr',
      'uk-UA': 'https://www.unitedtogive.ca/uk',
    },
  },
}

export default async function RootLayout({
  children,
  params
}) {
  const {locale} = await params

  if (!hasLocale(locales, locale)) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body
        className={`antialiased`}
      >
        <NextIntlClientProvider>
          <div className="w-dvw h-dvh">
            <Header locale={locale}/>
            {children}
            <Footer locale={locale}/>
          </div>
        </NextIntlClientProvider>
        <Analytics/>
      </body>
    </html>
  )
}
