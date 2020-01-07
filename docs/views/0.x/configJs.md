---
title: Config.js 配置
date: 2019-04-09
---

## 移动端优化

在移动端，搜索框在获得焦点时会放大，并且在失去焦点后可以左右滚动，这可以通过设置元来优化。

```javascript
module.exports = {
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ]
}  
```

## 图标

您可以在导航菜单中添加图标，如下所示：

```javascript
{ text: 'Tags', link: '/tags/', icon: 'reco-tag' }
```

该项目有内置图标供您选择

![icon.png](https://upload-images.jianshu.io/upload_images/4660406-565b8ffd891b9cb3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 设置作者姓名

1. 设置全局作者姓名

```javascript
module.exports = {
  themeConfig: {
    // author
    author: 'reco_luan',
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