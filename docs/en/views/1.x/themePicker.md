---
title: Theme Picker
date: 2019-08-23
---

## Disable

```javascript
// .vuepress/config.js
module.exports = {
  theme: 'reco',
  themeConfig: {
    themePicker: false
  }  
}  
```

## Custom color

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