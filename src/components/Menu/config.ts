import { MenuEntry } from '@xdcx/uikit-v1'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://18.116.69.213/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'http://smileyswap.com/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'http://smileyswap.com/pools',
  },
  
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://smileyswap-lab.gitbook.io/smiley-swap/getting-started/how-to-get-fantom-ftm',
      },
      // {
      //   label: 'Voting',
      //   href: 'https://voting.pancakeswap.finance',
      // },
      {
        label: 'Github',
        href: 'https://github.com/Smileyswap',
      },
      {
        label: 'Docs',
        href: 'https://smileyswap-lab.gitbook.io/smiley-swap/getting-started/how-to-get-fantom-ftm',
      },
      {
        label: 'Blog',
        href: '',
      },
      // {
      //   label: 'Merch',
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
]

export default config
