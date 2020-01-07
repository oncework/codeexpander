---
title: 添加分类
date: 2019-04-09
---

**如果要添加 `front-end` 和 `back-end` 分类，需要进行以下步骤：**

## 添加导航按钮
    
```javascript
// change /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'categories', 
        items: [
          { text: 'frontEnd', link: '/categories/frontEnd' },
          { text: 'backEnd', link: '/categories/backEnd' }
        ]
      }
    ]
  }  
}  
```

## 添加分类所需的文件

**`/docs/categories/frontEnd.md`**

```
--- 
title: frontEnd  
isCategories: true  
sidebar: false  
isComment: false
---

## FrontEnd
```

**`/docs/categories/backEnd.md`**

```
---
title: backEnd
isCategories: true
sidebar: false
isComment: false
---

## BackEnd
```

你为什么设置侧边栏为 `false` 呢？因为您启用了分类，这与自定义侧边栏功能有点冲突，所以您全局打开自动侧边栏功能，然后在不需要侧标记的地方关闭它。

## 写文章时添加分类
   
```
---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
categories: frontEnd
---
```

请记住， `categories` 文件的相应 `title` 值和相应的分类值是一致的。