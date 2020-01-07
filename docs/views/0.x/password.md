---
title: 加密功能
date: 2019-04-09
---

## 项目加密

如果项目具有私密性，不希望被公开，只有填入密钥登录后（关闭标签后登录失效），才能进入内容页面。以数组的格式设置 `keys`，可以设置多个密码，数组的值必须是字符串。

```javascript
// 更改 /docs/.vuepress/config.js

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