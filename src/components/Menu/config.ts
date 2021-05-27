import { MenuEntry } from '@xdcx/uikit-v1'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'http://smileyswap.com/',
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
        label: "Contact",
        href: "https://smileyswap-lab.gitbook.io/smiley-swap/",
      },
      {
        label: "Github",
        href: "https://github.com/pancakeswap",
      },
      {
        label: "Docs",
        href: "https://smileyswap-lab.gitbook.io/smiley-swap/",
      },
      {
        label: "Bridge",
        href: "https://smileyswap-lab.gitbook.io/smiley-swap/getting-started/contract-addresses",
      },
    ],
  },
]

export default config
