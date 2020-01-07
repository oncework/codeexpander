---
title: Config.js 配置
date: 2019-04-09
---

## 移动端优化

在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。

```javascript
// .vuepress/config.js
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
}  
```

## 图标

您可以在导航菜单中使用主题的内置图标，如下所示：

```javascript
{ text: 'Tags', link: '/tags/', icon: 'reco-tag' }
```

本主题有以下内置图标供您选择

<icon-example></icon-example>

## 备案信息和项目开始时间 

> `ICP 备案指向链接` 和 `公安部备案` 在 `1.2.0` 后生效。

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // 备案
    record: 'ICP 备案文案',
    recordLink: 'ICP 备案指向链接',
    cyberSecurityRecord: '公安部备案文案',
    cyberSecurityLink: '公安部备案指向链接',
    // 项目开始时间，只填写年份
    startYear: '2017'
  }
}
```

## 设置作者姓名

1. 设置全局作者姓名

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    // author
    author: 'reco_luan'
  }
}
```

2. 为单篇文章设置作者姓名

```bash
---
title: 你还没真的努力过，就轻易输给了懒惰
date: 2015-04-23
categories: article
author: 渡渡
---
```

## 华为文案

首页可以显示 “华为” 文案，需要以下配置。

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    huawei: true
  }
}
```

## Logo

导航栏左侧可以显示logo, 需要以下配置。

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```

## 头像

::: warning
`1.2.0` 后使用 `themeConfig.authorAvatar` 替换首页的 `faceImage` 来设置头像
::: 

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    authorAvatar: '/avatar.png'
  }  
}  
```