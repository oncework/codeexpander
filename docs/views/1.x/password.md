---
title: 加密功能
date: 2019-04-09
---

## 项目加密

### 加密介绍

如果项目具有私密性，不希望被公开，只有填入密钥登录后（关闭标签后登录失效），才能进入内容页面。以数组的格式设置 `keys`，可以设置多个密码，数组的值必须是字符串。

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    // 密钥
    keyPage: {
      keys: ['123456'],
      color: '#42b983', // 登录页动画球的颜色
      lineColor: '#42b983' // 登录页动画线的颜色
    }
  }  
}  
```

### 绝对加密 <Badge text="1.1.2+" />

项目的默认加密方式，只是将加密页定位到实际内容上方，所以这种加密功能本身是没有什么作用的。

如果需要绝对的加密，需要设置 `absoluteSecrecy: true`，但是这样会影响两点：
1. 页面的 SSR 渲染；
2. 锚点的跳转。

## 文章加密

如果项目是公开的，而某些文章可能需要加密，需要在 `frontmatter` 以数组的格式设置 `keys`，可以设置多个密码，数组的值必须是字符串。

```yaml
---
title: vuepress-theme-reco
date: 2019-04-09
author: reco_luan
keys:
 - '123456'
---
```

:::warning
**加密页的遗留问题： **   
从某篇单独加密的文章直接进入另一篇文章时（比如导航栏）加密无法隐藏 
:::