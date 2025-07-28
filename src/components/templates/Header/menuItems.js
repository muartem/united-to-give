const menuItems = (t) => [
  {
    name: t('BloodDonation'),
    href: '/blood-donation',
    /*submenu: [
			{
				name: 'Military',
				href: '/industries',
			},
		],*/
  },
  /*{
    name: t('CharityEvent'),
    href: '/charity-event',
    submenu: null,
  },*/
  {
    name: t('BecomePartner'),
    href: '/become-partner',
    submenu: null,
  },
  {
    name: t('DonateFunds'),
    href: '/donate-funds',
    submenu: null,
  },
]

export const menu2Footer = (t) => [
  {
    name: t('ReferralProgram'),
    href: '/referral-program',
    submenu: null,
  },
  {
    name: t('Challenge'),
    href: '/challenge',
    submenu: null,
  },
  {
    name: t('Availability'),
    href: 'https://www.blood.ca/en/blood/am-i-eligible-donate-blood',
    submenu: null,
  },
]

export default menuItems
