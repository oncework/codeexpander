---
title: 添加时间轴
date: 2019-04-09
---

::: tip
在 `1.1.0` 版本之后，对时间轴进行了重构，优化配置，用户无需额外添加相关文件，其他配置不变。
:::

## 添加导航按钮
    
```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' }
    ]
  }    
}  
```

## 添加所需的文件 <Badge type="warning" text="1.1.0+ 无需要配置此项" />

**`/docs/timeLine/README.md`**

```yaml
---
isTimeLine: true
sidebar: false
isComment: false
---

## Time Line
``` 

## 写文章时添加日期

::: warning
日期是可以填写 `时分秒` 的，格式为 `2019-10-20 00:00:00`。
:::
   
```yaml
---
title: 【vue】跨域解决方案之proxyTable  
date: 2017-12-28
tags:
- vue
- webpack
---
```   