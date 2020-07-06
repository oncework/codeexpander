module.exports = {
  type: 'HomePageOne',
  logo: '/static/icon.png',
  // 搜索设置
  search: true,
  searchMaxSuggestions: 10,
  // 自动形成侧边导航
  sidebar: 'auto',
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  author: 'codeexpander',
  authorAvatar: '/head.png',
  // 备案号
  // record: '京ICP备17067634号-1',
  // 项目开始时间
  startYear: '2018',
  algolia: {
    appId: 'BH4D9OD16A',
    apiKey: '11031ae1d8dcde21cb04e6fab19a0a73',
    indexName: 'codeexpander'
    // inputSelector: '### REPLACE ME ####',
    // algoliaOptions: { 'facetFilters': ["lang:$LANG"] },
    // debug: false // Set debug to true if you want to inspect the dropdown
  },
  // valine 设置
  valineConfig: {
    appId: '7Wrx6uzGdo3qnsLz8SJIRaqH-gzGzoHsz',
    appKey: 'EUJBSYTP5iPriKgw0YQ5g0xf',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    notify: true,
    recordIP: true
  },
  // vssueConfig: {
  //   admins: ['recoluan'],
  //   platform: 'github',
  //   owner: 'vuepress-reco',
  //   repo: 'vuepress-reco.github.io',
  //   clientId: '4d81cea3b3d8aac8e88e',
  //   clientSecret: 'd23e8556b6d3c85abffbf4b8d853afb2ea08875a',
  // },
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'oncework/codeexpander',
  docsDir: 'docs',
  docsBranch: 'gh-pages-source',
  // 默认是 false, 设置为 true 来启用
  editLinks: true
}