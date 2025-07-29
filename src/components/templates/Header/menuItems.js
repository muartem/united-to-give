const menuItems = (t) => [
  {
    name: t('BloodDonation'),
    href: '/blood-donation',
    shouldHaveLocale: true,
    /*submenu: [
			{
				name: 'Military',
				href: '/industries',
			},
		],*/
  },
  {
    name: t('CharityEvent'),
    href: '/charity-event',
    shouldHaveLocale: true,
    submenu: null,
  },
  {
    name: t('BecomePartner'),
    href: '/become-partner',
    shouldHaveLocale: true,
    submenu: null,
  },
  {
    name: t('DonateFunds'),
    href: '/donate-funds',
    shouldHaveLocale: true,
    submenu: null,
  },
]

export const menu2Footer = (t) => [
  {
    name: t('ReferralProgram'),
    href: '/referral-program',
    shouldHaveLocale: true,
    submenu: null,
  },
  {
    name: t('Challenge'),
    href: '/challenge',
    shouldHaveLocale: true,
    submenu: null,
  },
  {
    name: t('Availability'),
    shouldHaveLocale: false,
    href: 'https://www.blood.ca/en/blood/am-i-eligible-donate-blood',
    submenu: null,
  },
]

export default menuItems
