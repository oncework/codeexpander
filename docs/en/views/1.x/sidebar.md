---
title: 侧边栏
date: 2019-10-25
author: 橘子
---

## 侧边栏是否打开

建议全局打开自动侧边栏功能

```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    sidebar: 'auto'//在所有页面中启用自动生成侧栏
  }
}
```

然后通过 `YAML front matter` 来禁用指定页面的侧边栏

```yaml
---
sidebar: false
---
```

## 侧边栏深度
  
> 默认情况下，侧边栏会自动地显示由当前页面的标题（headers）组成的链接，并按照页面本身的结构进行嵌套，你可以通过 `themeConfig.sidebarDepth` 来修改它的行为。默认的深度是 `1`，它将提取到 `h2` 的标题，设置成 `0` 将会禁用标题（headers）链接，同时，最大的深度为 `2`，它将同时提取 `h2` 和 `h3` 标题。  
> 你也可以使用 `YAML front matter` 来为某个页面重写此值：

```yaml
---
sidebarDepth: 2
---
```

## [更多侧边栏配置](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F)