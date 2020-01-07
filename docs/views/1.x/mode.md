---
title: dark mode
date: 2019-12-29
---

::: tip
The theme is from `1.2.0`. Adapt the dark theme mode of the system. If you have some plugins or custom components about this theme, you need to adapt the dark mode.
:::

## 颜色变量

Here are the color variables provided by the theme. Please select the corresponding color variable according to your needs and replace the color value in your component:

| Variables | Light Mode | Dark Mode |
|-|-|-|
|--default-color-10|rgba(0, 0, 0, 1)|rgba(255, 255, 255, 1)|
|--default-color-9|rgba(0, 0, 0, .9)|rgba(255, 255, 255, .9)|
|--default-color-8|rgba(0, 0, 0, .8)|rgba(255, 255, 255, .8)|
|--default-color-7|rgba(0, 0, 0, .7)|rgba(255, 255, 255, .7)|
|--default-color-6|rgba(0, 0, 0, .6)|rgba(255, 255, 255, .6)|
|--default-color-5|rgba(0, 0, 0, .5)|rgba(255, 255, 255, .5)|
|--default-color-4|rgba(0, 0, 0, .4)|rgba(255, 255, 255, .4)|
|--default-color-3|rgba(0, 0, 0, .3)|rgba(255, 255, 255, .3)|
|--default-color-2|rgba(0, 0, 0, .2)|rgba(255, 255, 255, .2)|
|--default-color-1|rgba(0, 0, 0, .1)|rgba(255, 255, 255, .1)|
|--background-color|#fff|#25272a|
|--box-shadow|0 1px 6px 0 rgba(0, 0, 0, 0.2)|0 1px 6px 0 rgba(0, 0, 0, .9)|
|--text-color|#2c3e50|#aaa|
|--border-color|#eaecef|rgba(0, 0, 0, .3)|
|--code-color|rgba(27, 31, 35, 0.05)|rgba(0, 0, 0, .3)|
|--mask-color|#888|#000|

##  Instructions

```stylus
.title {
  color: var(--text-color)
}
```
