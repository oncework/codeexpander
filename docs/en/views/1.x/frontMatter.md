---
title: Front Matter
date: 2019-10-21
---

A complete `Front Matter` case:

```yaml
---
title: The practice of roast duck
date: 2019-08-08
sidebar: 'auto'
categories:
 - cooking
 - hobbies
tags:
 - barbecue
 - duck
keys:
 - '123456' 
publish: false
---
```

### title

- description: The title of the article, abandoning the way to define the title through the first level directory, changed in `Front Matter`.

### date

- description: The date the article was created, in the format `2019-08-08` or `2019-08-08 08:08:08`.

### sidebar

- description: Whether to open the sidebar.

### categories

- description: The category to which it belongs.

### tags

- description: The tag to which it belongs.

### keys

- description: Article access password.

### publish

- description: Whether the article is published.

### sticky <Badge text="1.1.2+" />

- description: Article sticky.
- type: `number`
- sort type: Descending order, you can lower the priority of the top posts according to `1, 2, 3, ...`.

