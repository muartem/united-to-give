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
  {
    name: t('CharityEvent'),
    href: '/charity-event',
    submenu: null,
  },
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

export default menuItems
