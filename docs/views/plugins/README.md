---
title: 介绍
date: 2019-09-30
---

## 插件是什么

VuePress 自 `1.0` 版本开始对插件进行了支持，这使得我们不仅可以应用一个喜欢的主题，而且可以自己去选择一些插件来丰富你的博客或者文档内容，搭建一个属于你自己的静态网站。

主题也自 `vuepress-theme-reco@1.1.0` 版本开始进行插件化，将能够独立的功能或组件封装成插件，精简核心代码，方便维护和扩展。

## 插件的来源有哪些

### vuepress-reco 组织下的插件

我们开发了一些能够帮助你丰富网站内容的小插件，你可以根据自己的喜好去启用它们。

::: tip

我们的插件均发布在 `npm` 的组织 `vuepress-reco` 下，所以以下插件默认全称为 `@vuepress-reco/vuepress-plugin-<name>` （比如 `back-to-top` 的完整名称为 `@vuepress-reco/vuepress-plugin-back-to-top`） ，下面将简写组织内插件名称。

:::

<table>
  <tr>
    <th style="width:100px">名称</th>
    <th style="width:60px">版本</th>
    <th style="width:20px">是否内置</th>
    <th style="width:20px">是否主题独占</th>
    <th style="width:100px">描述</th>
  </tr>
  <tr>
    <td>
      <a href="backToTop.html">back-to-top</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-back-to-top"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>返回顶部插件</td>
  </tr>
  <tr>
    <td>
      <a href="pagation.html">pagation</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-pagation"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>分页插件，帮助你快速跳转到任意页面</td>
  </tr>
  <tr>
    <td>
      <a href="screenfull.html">screenfull</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-screenfull"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>全屏按钮插件</td>
  </tr>
  <tr>
    <td>
      <a href="loadingPage.html">loading-page</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-loading-page"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>页面加载时过渡动画插件</td>
  </tr>
  <tr>
    <td>
      <a href="kanbanniang.html">kan-ban-niang</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-kan-ban-niang"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>看板娘插件，为你的网站添加一个萌萌哒看板娘~</td>
  </tr>
  <tr>
    <td>
      <a href="comments.html">comments</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-comments"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>评论插件，集成了 Valine 与 Vssue 两种评论系统</td>
  </tr>
  <tr>
    <td>
      <a href="extractCode.html">extract-code</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-extract-code"/>
    </td>
    <td>✔</td>
    <td>✖</td>
    <td>代码展示插件，可以方便地帮你展示多种代码组合</td>
  </tr>
  <tr>
    <td>
      <a href="rss.html">rss</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-rss"/>
    </td>
    <td>✖</td>
    <td>✔</td>
    <td>RSS 生成插件</td>
  </tr>
  <tr>
    <td>
      <a href="bgmPlayer.html">bgm-player</a>
    </td>
    <td>
      <NpmLink pkg="@vuepress-reco/vuepress-plugin-bgm-player"/>
    </td>
    <td>✖</td>
    <td>✖</td>
    <td>背景音乐播放器</td>
  </tr>
</table>

::: warning 注意

- 只有**内置插件**是在安装主题时安装并配置好的，非内置插件（比如 kan-ban-niang 插件）需要你自行安装并配置。
- 为了使得主题更加定制化，我们开发了一些本**主题独占**的插件（比如 rss 插件），由于和主题之间存在强耦合，所以这些插件**在其他主题可能不会正常工作**。

:::

### npm 中的 VuePress 插件生态

如果你想额外添加一些自己喜欢的插件，你可以[在 npm 中搜索 `vuepress-plugin`](https://www.npmjs.com/search?q=vuepress-plugin) 前缀来查看当前 VuePress 社区中已经开发的插件，之后使用 npm 或者 yarn [下载](#插件的下载)并在 `.vuepress/config.js` 中[配置](#简单使用插件)以启用它们。

### 主题内置插件

主题内置了一些适合于博客以及文档开箱即用的插件，方便你更快地搭建起一个简洁而又不失优雅的静态网站。

这些内置的插件已经按照主题风格进行配置，你不需要去手动去启用它们，但如果你不喜欢我们内置的配置，完全可以[修改插件配置](#为插件配置选项)甚至禁用插件。

|                                                           名称                                                           | 是否必需 |                                   默认配置                                   | 描述                             |
| :----------------------------------------------------------------------------------------------------------------------: | :------: | :--------------------------------------------------------------------------: | :------------------------------- |
|                                              [back-to-top](./backToTop.md)                                               |    ✖     |                                      -                                       | ...                              |
|                                                [comments](./comments.md)                                                 |    ✔     | 需主题配置内配置 `$themeConfig.vssueConfig` 或者 `$themeConfig.valineConfig` | ...                              |
|                                             [loading-page](./loadingPage.md)                                             |    ✔     |                              作为组件，无需配置                              | ...                              |
|                                                [pagation](./pagation.md)                                                 |    ✔     |                              作为组件，无需配置                              | ...                              |
|                                              [screenfull](./screenfull.md)                                               |    ✔     |                              作为组件，无需配置                              | ...                              |
|                                                      [extractCode](./extractCode.md)                                                       |    ✖     |                  -                   | ...                              |
| [@vuepress/plugin-active-header-links](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-active-header-links.html) |    ✖     |                                      -                                       | 页面滚动时自动激活侧边栏链接插件 |
|         [@vuepress/plugin-medium-zoom](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-medium-zoom.html)         |    ✖     |              `{selector: '.theme-reco-content :not(a) > img'}`               | 图片缩放插件                     |
|           [@vuepress/plugin-nprogress](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-nprogress.html)           |    ✖     |                                      -                                       | 一个基于 nprogress 的进度条插件  |
|              [@vuepress/plugin-search](https://v1.vuepress.vuejs.org/zh/plugin/official/plugin-search.html)              |    ✔     |                                      -                                       | 基于 Headers 的搜索插件          |
|                             [@vuepress/plugin-blog](https://vuepress-plugin-blog.ulivz.com/)                             |    ✖     |                本插件是博客系统的基础，请不要禁用或者覆盖配置                | 博客插件                         |
|[vuepress-plugin-container](https://vuepress.github.io/zh/plugins/container/)|✖| 使用默认主题的配置，效果见[在 Markdown 中使用容器](../1.x/syntax.md#container)|在你的文档中注册新的 Markdown 容器，可同时注册多个容器|

::: tip 什么是必需插件

因为主题正处于插件化的进程中，与大部分插件尚存在一些耦合，如果你通过手动禁用这些插件可能会引发某些莫名其妙的错误，所以**请尽量不要禁用标有必需标志的插件**，如果你有这样的需求，欢迎在评论中留言

:::

## 插件怎么用

> [关于插件的使用的详细文档](https://vuepress.vuejs.org/zh/plugin/using-a-plugin.html)

### 插件的下载

如果你有一个已经发布在 `npm` 的喜欢的插件，你可以使用以下命令来下载并安装它

```bash
yarn add <pagkageName> -D
# or
npm i <packageName> -D
```

::: warning 注意

这里的包名需要全称，并不能省略 `vuepress-plugin-`

:::

### 简单使用插件

在下载插件后，你可以通过在 `.vuepress/config.js` 中做一些配置来使用插件

```javascript
module.exports = {
  plugins: ["vuepress-plugin-xxx"]
};
```

你甚至可以省略掉 `vuepress-plugin-`

```javascript
module.exports = {
  plugins: ["xxx"]
};
```

### 为插件配置选项

如果你选择的插件支持 Options ，那么你可以通过以下两种方式添加

#### Babel 式

```javascript
module.exports = {
  plugins: [
    [
      "vuepress-plugin-xxx",
      {
        /* options */
      }
    ]
  ]
};
```

就像这样

```javascript
module.exports = {
  plugins: [
    [
      "@vuepress-reco/vuepress-plugin-kan-ban-niang",
      {
        theme: ["miku"],
        clean: true,
        modelStyle: {
          position: "fixed",
          left: "0px",
          bottom: "0px",
          opacity: "0.9",
          zIndex: 99999
        }
      }
    ]
  ]
};
```

#### 对象式

```javascript
module.exports = {
  plugins: {
    xxx: {
      /* options */
    }
  }
};
```

::: tip

你可以通过这种方式来对主题内置插件的配置进行覆盖，甚至禁用一个内置插件

只需将 Options 设置成 `false` 便可禁用该插件

就像这样

```javascript
module.exports = {
  plugins: [
    ["@vuepress-reco/back-to-top", false] // disabled.
  ]
};
```

:::
