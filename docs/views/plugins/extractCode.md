---
title: extractCode
date: 2019-11-01
---

## Introduce <GitHubLink repo="vuepress-reco/vuepress-plugin-extract-code/"/>

Features and code presentation plugin for vuepress-theme-reco or other vuepress theme.

<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/extract-code.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/extract-code.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/extract-code.vue?style
  </template>
  <extract-code slot="demo"></extract-code>
</RecoDemo>

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-extract-code`

## Usage

### 修改 `config.js`

```js
module.exports = {
  plugins: [
    '@vuepress-reco/extract-code'
  ]
}
```

### 展示 `VUE` 组件

> `@` 是当前项目目录的别名

```html
<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/demo.vue?style
  </template>
</RecoDemo>
```

### 随意组合想展示的代码

比如，你想展示 `html` 代码，需要将插槽名字改为 `code-html`，然后将文件指向对应的文件即可。

```html
<RecoDemo>
  <template slot="code-html">
    <<< @/docs/.vuepress/config/nav/index.html
  </template>
  <template slot="code-css">
    <<< @/docs/.vuepress/config/nav/style.css
  </template>
  <template slot="code-js">
    <<< @/docs/.vuepress/config/nav/index.js
  </template>
</RecoDemo>
```

### 展示代码效果

如果你想同时展示你的案例的显示效果，可以通过 `demo` 这个插槽来操作：

#### 1. 可以通过 `img` 标签去展示效果截图

  ```html
  <RecoDemo>
    <template slot="code-template">
      <<< @/docs/.vuepress/demo/demo.vue?template
    </template>
    <template slot="code-script">
      <<< @/docs/.vuepress/demo/demo.vue?script
    </template>
    <template slot="code-style">
      <<< @/docs/.vuepress/demo/demo.vue?style
    </template>

    <img src="./images/demo.png" slot="demo" />
  </RecoDemo>
  ```

#### 2. 当然，如果可以将展示效果写成一个 `vue` 组件的话，可以这样来展示：

```html
<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/demo.vue?style
  </template>

  <some-demo slot="demo"></some-demo>
</RecoDemo>
```

只要你的组件可以在 `.md` 文件中正常使用就可以，你可以把这些组件放在 `.vuepress/components` 下；可以通过官方注册插件 `@vuepress/plugin-register-components` 去注册组件；可以通过组件的方式去注入。

#### 3. 另外，如果你想要展示的案例代码就是一个独立的可以显示效果的功能组件，那最方便不过了，因为这个组件既可以作为代码来源，又可以用来显示效果：

```html
<RecoDemo>
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/some-demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/some-demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/some-demo.vue?style
  </template>

  <some-demo slot="demo"></some-demo>
</RecoDemo>
```

### 展示不具名的代码

如果你的代码只是某个代码块，可以直接在文本里写，这样很方便，不需要去建立一个文件，但是这样不会显示代码高亮的。

```html
<RecoDemo :collapse="true">
  <template slot="code-js">
    <pre>
      console.log(`I'm reco_luan.`)
    </pre>
  </template>
</RecoDemo>
```

但是这样还有一个缺点，就是会有多余的代码缩进，可以这样粗暴解决：

```html
<RecoDemo :collapse="true">
<template slot="code-js">
<pre>
const a = 1
a.b = 1
</pre>
</template>
</RecoDemo>
```

### 默认显示代码块

代码展示默认是隐藏的，点击左上角的按钮才可以显示，可以把 `collapse` 设置为 `true` 来默认显示代码：

```html
<RecoDemo :collapse="true">
  <template slot="code-template">
    <<< @/docs/.vuepress/demo/some-demo.vue?template
  </template>
  <template slot="code-script">
    <<< @/docs/.vuepress/demo/some-demo.vue?script
  </template>
  <template slot="code-style">
    <<< @/docs/.vuepress/demo/some-demo.vue?style
  </template>

  <some-demo slot="demo"></some-demo>
</RecoDemo>
```

## Contributors

<Contributors user="vuepress-reco" repo="vuepress-plugin-extract-code"></Contributors>