---
title: update 1.x from 0.x
date: 2019-04-09
---

## Category And Tag

### Delete files needed for category and tag

```
--- 
title: frontEnd  
isCategories: true  
sidebar: false  
isComment: false
---

## FrontEnd
```

The category and tag routes and tagging of '1. X' is based on '@vuepress/plugin-blog', so these files are no longer needed.

### Configure category and tag through `config.js`

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
     // blog config
    blogConfig: {
      category: {
        location: 2,     // Position in the navigation bar menu, default 2
        text: 'Category' // Default "Category"
      },
      tag: {
        location: 3,     // Position in the navigation bar menu, default 2
        text: 'Tag'      // Default "Tag"
      }
    }
  }  
}  
```

### Edit YAML front matter 

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

The difference is simply that the categories is changed to an array.
