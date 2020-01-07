module.exports = {
  'zh': [
    { text: '文档', 
      icon: 'reco-api',
      items: [
        { 
          text: '主题', items: [
            { text: '1.x', link: '/views/1.x/' },
            { text: '0.x', link: '/views/0.x/' }
          ],
        },
        {
          text: '插件', items: [
            { text: '插件', link: '/views/plugins/' }
          ]
        }
      ]
    },
    { text: '常见问题', link: '/views/other/question', icon: 'reco-faq' },
    { text: '博客', link: '/categories/blog/', icon: 'reco-blog'},
    { text: '案例', link: '/views/other/theme-example.html', icon: 'reco-category'},
    { text: '订阅', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'}
  ],
  'en': [
    { text: 'Documents', 
      icon: 'reco-api',
      items: [
        { 
          text: 'Theme', items: [
            { text: '1.x', link: '/en/views/1.x/' }
          ],
        },
        {
          text: 'Plugin', items: [
            { text: 'plugin', link: '/en/views/plugins/' }
          ]
        }
      ]
    },
    { text: 'FAQ', link: '/en/views/other/question', icon: 'reco-faq' },
    { text: 'Examples', link: '/en/views/other/theme-example.html', icon: 'reco-category'},
    { text: 'RSS', link: 'https://vuepress-theme-reco.recoluan.com/rss.xml', icon: 'reco-rss'}
  ]
}