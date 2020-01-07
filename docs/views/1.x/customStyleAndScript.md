---
title: 定制样式与脚本
date: 2019-11-22
author: SigureMo
---

## 定制属于你自己的样式

如果你不满足于主题提供的默认样式，VuePress 提供了一些简单的接口文件，可以让你能够很方便地定制你自己想要的效果。

### 修改主题颜色

你可以通过配置 `.vuepress/styles/palette.styl` 来快速修改主题的一些颜色属性。

``` stylus
// 默认值
$accentColor = #3eaf7c                      // 主题颜色
$textColor = #2c3e50                        // 文本颜色
$borderColor = #eaecef                      // 边框线颜色
$codeBgColor = #282c34                      // 代码块背景色
$backgroundColor = #ffffff                  // 悬浮块背景色
```

### 添加或修改主题样式

你可以创建一个 `.vuepress/styles/index.styl` 文件以方便地添加额外样式。这是一个 Stylus 文件，但你也可以使用正常的 CSS 语法。

``` stylus
.content {
  font-size 30px
}
```

::: tip 是否可以将颜色与样式写在同一个文件？

不可以将颜色与样式写在同一个文件中，VuePress 会先解析 `palette.styl` 中的全局变量，之后作用于主题的各个样式中，最后才解析 `index.styl` ，以覆盖主题默认的样式。

:::

## 在 Head 中引用脚本与样式

你可以通过配置 `.vuepress/config.js` 中的 `head` 来引入脚本与样式，它将会被编译为 `<head>` 中的一项。

``` js
module.exports = {
  head: [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    ["script", { src: "scripts/demo.js" }]
  ]
}
```

比如上面的配置就会被解析为

``` html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css">
  <script src="scripts/demo.js"></script>
</head>
```

关于 `head` 的详细配置说明请参考[官方文档 head 配置](https://v1.vuepress.vuejs.org/zh/config/#head)

## 在单独页面中应用样式和脚本

有时，你可以只想在当前页面应用一些 `JavaScript` 或者 `CSS`，在这种情况下，你可以直接在 `Markdown` 文件中使用原生的 `<script>` 或者 `<style>` 标签，它们将会从编译后的 HTML 文件中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style>` 标签。

**输入**

``` html
<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>
```

**输出**

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  props: ['slot-key'],
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这个块是被内联的脚本渲染的，样式也采用了内联样式。'
  }
}
</script>