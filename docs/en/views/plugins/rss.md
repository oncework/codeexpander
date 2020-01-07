---
title: rss
date: 2019-11-06
---

## Introduce <GitHubLink repo="vuepress-reco/vuepress-plugin-rss"/>

RSS plugin only for vuepress-theme-reco.

### Name

- **As plugin**: `@vuepress-reco/vuepress-plugin-rss`


## Option API

### site_url

- required: `true`
- description: 网站地址
- example: `https://vuepress-theme-reco.recoluan.com`

### copyright

- required: `false`
- description: 版权
- default: `'${$themeConfig.author} ${$themeConfig.startYear}'`
- example: `reco_luan 2019`

### filter

- required: `false`
- description: 博客的过滤器
- default: `(frontmatter) => true`
- example: `(frontmatter) => { return [true|false] }`

### count

- required: `false`
- description: 显示最近多少篇博客
- default: `20`
- example: `20`

## Contributors

<Contributors user="vuepress-reco" repo="vuepress-plugin-rss"></Contributors>