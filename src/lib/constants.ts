export const SITE_CONFIG = {
  name: '灵犀智能体工作室',
  description: '助力汽车行业AI智能化转型，为车企和经销商提供专业AI解决方案',
  url: 'https://lingxi-agent.com',
  ogImage: 'https://lingxi-agent.com/og.jpg',
  links: {
    wechat: 'lingxi_agent',
    email: 'guanyq01@insightmc.com.cn',
    phone: '18652076653',
  },
} as const

export const NAV_ITEMS = [
  { name: '首页', path: '/' },
  { name: '走进智能体', path: '/zou-jin-zhi-neng-ti' },
  { name: '服务板块', path: '/服务板块' },
  { name: '用户声音', path: '/用户声音' },
  { name: '联系我们', path: '/联系我们' },
] as const

export const SOCIAL_LINKS = [
  { name: '微信', icon: 'wechat', href: '#' },
  { name: '微博', icon: 'weibo', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' },
] as const
