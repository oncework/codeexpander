---
title: 主题颜色选择器
date: 2019-08-23
---

## 禁用

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    themePicker: false
  }  
}  
```

## 自定义颜色

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    themePicker: {
      colorName1: 'red',
      colorName2: 'yellow',
      colorName3: 'blue'
    }
  }  
}  
```

```stylus
// .vuepress/styles/palette.styl
$themePicker = {
  colorName1: red,
  colorName2: yellow,
  colorName3: blue
}
```