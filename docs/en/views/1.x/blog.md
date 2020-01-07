---
title: Category and tag
date: 2019-04-09
---

## Addblog configuration
    
```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
     // Blog configuration
    blogConfig: {
      category: {
        location: 2,     // The position occupied in the navigation bar menu, default 2
        text: 'Category' // Default copy "Category"
      },
      tag: {
        location: 3,     // The position occupied in the navigation bar menu, default 3
        text: 'Tag'      // Default copy "Tag"
      }
    }
  }  
}  
```

## Add categories and tags when writing articles

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

> Note: `categories` and `tags` are to be filled in as an array.
