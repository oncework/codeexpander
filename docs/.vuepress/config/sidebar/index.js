module.exports = {
  'zh': Object.assign({}, {
    '/views/introduce/': [
      {
        title: '介绍',
        collapsable: false,
        children: [
          'features',
          'installation',
          'basic-usage',
          'quick-browse'
        ]
      }
    ],
    '/views/advance/': [
      {
        title: '进阶',
        collapsable: false,
        children: [
          'group',
          'text-and-script',
          'keyboard',
          'calendar',
          'fill-in',
          'rich-text'
        ]
      }
    ],
    '/views/reference/': [
      {
        title: 'Reference',
        collapsable: false,
        children: [
          'faq',
          'shortcut',
          'privacy-policy'
        ]
      }
    ]
  }),
  'en': Object.assign({}, {
    '/en/views/introduce/': [
      {
        title: 'Basic',
        collapsable: false,
        children: [
          'features',
          'installation',
          'basic-usage',
          'quick-browse'
        ]
      }
    ],
    '/en/views/advance/': [
      {
        title: 'Advance',
        collapsable: false,
        children: [
          'group',
          'text-and-script',
          'keyboard',
          'calendar',
          'fill-in',
          'rich-text'
        ]
      }
    ],
    '/en/views/reference/': [
      {
        title: 'Reference',
        collapsable: false,
        children: [
          'faq',
          'shortcut',
          'privacy-policy'
        ]
      }
    ]
  })
}