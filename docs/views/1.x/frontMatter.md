---
title: Front Matter
date: 2019-10-21
---

一个完整的 `Front Matter` 案例：
```yaml
---
title: 烤鸭的做法
date: 2019-08-08
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys:
 - '123456' 
publish: false
---
```

### title

- description: 文章标题，放弃通过一级目录定义标题的方式，改在 `Front Matter` 中定义。

### date

- description: 文章创建日期，格式 `2019-08-08` 或 `2019-08-08 08:08:08`。

### sidebar

- description: 是否开启侧边栏。

### categories

- description: 所属分类。

### tags

- description: 所属标签。

### keys

- description: 文章加密密码。

### publish

- description: 文章是否发布。

### sticky <Badge text="1.1.2+" />

- description: 文章置顶。
- type: `number`
- sort type: 降序，可以按照 `1, 2, 3, ...` 来降低置顶文章的排列优先级
