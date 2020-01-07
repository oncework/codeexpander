---
title: 首页配置
date: 2019-04-09
---

## heroImage

1. 如果您的heroImage具有您的网站标题，则可能需要设置值 `isShowTitleInHome` `false` 以使标题不显示。

```bash
# this is your homepage

---
home: true
heroImage: /hero.png
isShowTitleInHome: false
---
```

2. 如果你想改变heroImage的风格，你可以设置值 `heroImageStyle` 来实现你想要的效果

```bash
# 这是你的主页 

---
home: true
heroImage: /hero.png
heroImageStyle: {
  maxHeight: '200px',
  display: block,
  margin: '6rem auto 1.5rem',
  borderRadius: '50%',
  boxShadow: '0 5px 18px rgba(0,0,0,0.2)'
}
---
```