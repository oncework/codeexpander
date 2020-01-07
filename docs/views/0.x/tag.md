---
title: 添加标签
date: 2019-04-09
---

## 在顶部导航中添加一个按钮
    
```javascript
// change /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'Tags', link: '/tags/' }
    ]
  }    
}    
```

## 添加所需的文件

**`/docs/tags/README.md`**

```
---
isTags: true
sidebar: false
isComment: false
---

## tag cloud
```

## 写文章时添加标签
   
```
---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
tags:
- vue
- webpack
---
```