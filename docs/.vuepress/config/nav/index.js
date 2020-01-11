module.exports = {
  'zh': [
    {
      text: '文档',
      icon: 'reco-api',
      items: [
        {
          text: '基础', items: [
            { text: '特性', link: '/views/introduce/features' },
            { text: '安装', link: '/views/introduce/installation' },
            { text: '入门', link: '/views/introduce/basic-usage' },
            { text: '界面', link: '/views/introduce/quick-browse' },
          ],
        },
        {
          text: '进阶', items: [
            { text: '组管理', link: '/views/advance/group' },
            { text: '文本与脚本', link: '/views/advance/text-and-script' },
            { text: '键盘', link: '/views/advance/keyboard' },
            { text: '日历', link: '/views/advance/calendar' },
            { text: '自定义内容', link: '/views/advance/fill-in' },
          ]
        }
      ]
    },
    { text: '价格', link: '/views/price', icon: 'reco-faq' },
    { text: '常见问题', link: '/views/reference/faq.md', icon: 'reco-faq' },
    { text: '博客', link: '/categories/blog/', icon: 'reco-blog' },
    { text: '订阅', link: 'https://codeexpander.com/rss.xml', icon: 'reco-rss' }
  ],
  'en': [
    {
      text: 'Documents',
      icon: 'reco-api',
      items: [
        {
          text: 'Basic', items: [
            { text: 'features', link: '/en/views/introduce/features' },
            { text: 'installation', link: '/en/views/introduce/installation' },
            { text: 'Get Stared', link: '/en/views/introduce/basic-usage' },
            { text: 'Layout', link: '/en/views/introduce/quick-browse' },
          ],
        },
        {
          text: 'Advance', items: [
            { text: 'Group', link: '/en/views/advance/group' },
            { text: 'Text & Script', link: '/en/views/advance/text-and-script' },
            { text: 'Keyboard', link: '/en/views/advance/keyboard' },
            { text: 'Calendar', link: '/en/views/advance/calendar' },
            { text: 'Fill-in', link: '/en/views/advance/fill-in' },
          ]
        }
      ]
    },
    { text: 'Pricing', link: '/en/views/price', icon: 'reco-faq' },
    { text: 'FAQ', link: '/en/views/reference/faq.md', icon: 'reco-faq' },
    { text: 'Blog', link: '/en/categories/blog/', icon: 'reco-blog' },
    { text: 'RSS', link: 'https://codeexpander.com/rss.xml', icon: 'reco-rss' }
  ]
}