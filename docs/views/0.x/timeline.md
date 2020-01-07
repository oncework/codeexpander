---
title: 添加时间轴
date: 2019-04-09
---

## 添加导航按钮
    
```javascript
// change /docs/.vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeLine/', icon: 'reco-date' }
    ]
  }    
}  
```

## 添加所需的文件

**`/docs/timeLine/README.md`**

```
---
isTimeLine: true
sidebar: false
isComment: false
---

## Time Line
``` 

## 写文章时添加日期
   
```
---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
tags:
- vue
- webpack
---
```   