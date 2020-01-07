---
title: 0.x 迁移 1.x
date: 2019-04-09
---

## 分类和标签

### 删除分类和标签所需的文件

```
--- 
title: frontEnd  
isCategories: true  
sidebar: false  
isComment: false
---

## FrontEnd
```

`1.x` 的分类和标签 是基于 `@vuepress/plugin-blog` 来做的，所以不再需要借助这些文件了。

### 通过 `config.js` 来配置分类和标签

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
     // 博客设置
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

### 修改 YAML front matter 

**0.x**

```
---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
categories: frontEnd
tags:
 - vue
 - webpack
---
```

**1.x**

```
---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
categories: 
 - frontEnd
tags:
 - vue
 - webpack
---
```

差别只是分类改用数组的方式。
