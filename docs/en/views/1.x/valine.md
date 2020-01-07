---
title: Comments
date: 2019-04-09
---

## Introduce

The theme built-in comment plugin [@vuepress-reco/vuepress-plugin-comments](/views/plugins/), you can choose `Valine` or `Vssue` according to your preferences.

If only an article does not want to open comment, you can set `isShowComments: false` in `front-matter`.

::: warning
1. **Pageview** Displayed only when using `Valine`.  
2. Because ** views ** need to call the relevant interface when the page loads, all the data of the list page will be loaded together. If the number of articles is large, it will affect the loading speed, so remove the article list after `1.2.0` Page views.
:::

## Option API

### Valine

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    valineConfig: {
      appId: '...',// your appId
      appKey: '...', // your appKey
    }
  }  
}
```

Other parameters are referenced [Valine official website](https://valine.js.org/configuration.html).

> If valine's comment commenting interface is `404` error, don't worry, this is because you haven't added a comment yet, as long as there is 1 comment, you will not get an error. This is the request processing operation of `leanCloud`.

### Vssue

```javascript
module.exports = {
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'OWNER_OF_REPO',
      repo: 'NAME_OF_REPO',
      clientId: 'YOUR_CLIENT_ID',
      clientSecret: 'YOUR_CLIENT_SECRET',
    }
  }  
}
```

Other parameters refer to [Vssue official website](https://vssue.js.org/en/options/).