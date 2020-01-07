---
title: 首页配置
date: 2019-04-09
---

## Introduce

:::tip
主题的主页的默认风格偏文档，并不像一个博客，所以从 `vuepress-theme-reco@1.0.0-alpha.25` 开始，增加博客风格首页布局。
:::

## Option API

### Home
![home.png](../images/1.png)

#### 1. 如果您的heroImage具有您的网站标题，则可能需要设置 `isShowTitleInHome: false` 以使标题不显示。

```yaml
# 这是你的主页 

---
home: true
heroImage: /hero.png
isShowTitleInHome: false
---
```

#### 2. 如果你想改变heroImage的风格，你可以设置值 `heroImageStyle` 来实现你想要的效果

```yaml
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

### Home-Blog
![home.png](../images/home-blog.png)

> `heroImage` 在此模式下仍然有效。


#### 1. 指定 `type: 'blog'`

```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'blog'
  }  
}  
```

#### 2. 设置首页的背景图片，如果你想改变 bgImage 的风格，你可以设置值 `bgImageStyle` 来实现你想要的效果

```yaml
# 这是你的主页 

---
home: true
bgImage: '/bg.png'
bgImageStyle: {
  height: '350px'
}
---
```

#### 3. 设置首页右侧信息栏头像

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

#### 4. 添加友链 <Badge text="1.1.2+" />

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

- title 友链标题
- desc 友链描述
- logo 友链 LOGO（本地图片或网络图片）
- email 如果没有设置 `logo`，将通过 Email获取到的 `Gravatar` 头像来设置 LOGO
- link 友链地址

### 自定义首页 <Badge type="tip" text="Beta" />

> 首页会自动添加 `header` 和 `footer`，自定义部分无需考虑添加头部和脚部内容。

将你希望首页样式封装成 `vue` 组件，封装成插件或者 `@vuepress/plugin-register-components` 插件全局注册，然后配置 `type`：


```javascript
// .vuepress/config.js

module.exports = {
  theme: 'reco',
  themeConfig: {
    type: 'your vue component name'
  }  
}  
```

如果你的首页风格并不希望显示 `navbar`，你可以在首页文件里设置 `front-matter`，`navbar: false`。
