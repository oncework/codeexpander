---
title: 分类和标签
date: 2019-04-09
---

## 添加博客配置
    
```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
     // 博客配置
    blogConfig: {
      category: {
        location: 2,     // 在导航栏菜单中所占的位置，默认2
        text: 'Category' // 默认文案 “分类”
      },
      tag: {
        location: 3,     // 在导航栏菜单中所占的位置，默认3
        text: 'Tag'      // 默认文案 “标签”
      }
    }
  }  
}  
```

## 写文章时添加分类和标签

```yaml
--- 
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
categories: 
 - frontEnd
tags: 
 - vue
---
```

> 请注意， `categories` 和 `tags` 要以数组的方式填写。
