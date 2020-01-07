---
title: Home configuration
date: 2019-04-09
---

## Introduce

:::tip
The default style of the theme's homepage is not like a blog, so start with `vuepress-theme-reco@1.0.0-alpha.25` and add a blog style homepage layout.
:::

## Option API

### Home
![home.png](../images/1.png)

1. If your heroImage has your website title, you may need to set `isShowTitleInHome: false` so that the title is not displayed.

```yaml
# 这是你的主页 

---
home: true
heroImage: /hero.png
isShowTitleInHome: false
---
```

2. If you want to change the style of heroImage, you can set the value `heroImageStyle` to achieve the effect you want.

```yaml
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

### Home-Blog
![home.png](../images/home-blog.png)

 > `heroImage` is still valid in this mode.


1. Specify `type: 'blog'`

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }  
}  
```

2. Set the background image of the home page. If you want to change the style of bgImage, you can set the value `bgImageStyle` to achieve the effect you want.

```yaml
---
home: true
bgImage: '/bg.png'
bgImageStyle: {
  height: '350px'
}
---
```

3. Set the avatar of the information bar on the right side of the homepage

::: warning
After `1.2.0` use` themeConfig.authorAvatar` instead of `faceImage` on the homepage to set the avatar
:::

```javascript
// .vuepress / config.js

module.exports = {
   theme: 'reco',
   themeConfig: {
     authorAvatar: '/avatar.png'
   }
}
```

1. Add friend-link <Badge text="1.1.2+" />

```js
module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog',
    friendLink: [
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: "https://vuepress-theme-reco.recoluan.com/icon.png",
        link: 'https://vuepress-theme-reco.recoluan.com'
      },
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'recoluan@qq.com',
        link: 'https://www.recoluan.com'
      },
      // ...
    ]
  }
}  
```

- title: friend-link title
- desc: friend-link description
- logo: friend-link logo
- email: If `logo` is not set, the logo will be set by the `Gravatar` avatar obtained by Email.
- link: friend-link website

### Customize your home page <Badge type="tip" text="Beta" />

> The home page will automatically add `header` and `footer`, and the custom part does not need to consider adding header and foot content.

Write your desired home page style as a `vue` component, package it as a plugin or globally with the `@vuepress/plugin-register-components` plugin, then configure `type`:


```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'your vue component name'
  }  
}  
```

If your homepage style doesn't want to show `navbar`, you can set `front-matter`,`navbar: false` in the home page file.
