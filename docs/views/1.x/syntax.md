---
title: Markdown 中支持的语法
date: 2019-11-03
author: SigureMo
---

## 原生的 Markdown 语法

当然，你可以在 Markdown 中使用所有 Markdown 的原生语法，如果有一些不太方便使用 Markdown 语法实现的，你也可以在其中书写 HTML 语法

## VuePress 默认的扩展语法

VuePress 内置了一些比较易用的语法特性，这使得你可以更加容易地书写文章，这里简单列举下支持的语法，具体特性请前往 [VuePress Markdown 扩展语法](https://v1.vuepress.vuejs.org/zh/guide/markdown.html) 查看

- GitHub 风格的表格
- Table of Contents
- Emoji
- 代码块
    - 代码块语法高亮
    - 代码块中的行高亮
    - 显示行号
    - 代码段的导入

## 使用 `markdown-it` 插件扩展语法

你还可以使用 `markdown-it` 插件对语法进行扩展

``` javascript
// .vuepress/config.js
module.exports = {
  markdown: {
    // markdown-it-anchor 的选项
    anchor: { permalink: false },
    // markdown-it-toc 的选项
    toc: { includeLevel: [1, 2] },
    extendMarkdown: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require('markdown-it-xxx'))
    }
  }
}
```

## 在 Markdown 中使用 Vue

你甚至可以在 Markdown 中直接使用 Vue 以及 Vue 组件，就像这个主题内置的徽章<Badge text="Badge" />，更多示例请见 VuePress 官网[在 Markdown 中使用 Vue](https://vuepress.vuejs.org/zh/guide/using-vue.html)

## 使用插件扩展语法

还有一些 VuePress 插件可以提升你的 Markdown 语法，你可以参考[插件的使用](../plugins/README.md#插件怎么用)来添加你自己想要的插件

下面简单介绍两个比较实用的插件

### 容器

[vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/) 允许你可以使用来自定义一个容器，主题利用该插件内置了三个简单易用的块容器，你可以通过以下方式来启用

**输入**

``` markdown
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```

**输出**


::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

### 流程图

[vuepress-plugin-flowchart](https://flowchart.vuepress.ulivz.com/) 可以让你在 Markdown 中直接绘制流程图，就像这样

**输入**

```
@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend
```

**输出**

@flowstart
cond=>condition: Process?
process=>operation: Process
e=>end: End

cond(yes)->process->e
cond(no)->e
@flowend