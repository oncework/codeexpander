---
title: Notice
date: 2019-04-21
---

**[2019-11-03]** 更新 `1.1.1`

1. 【修复】首页出现评论框
2. 【修复】文章列表出现无用数据
3. 【修复】修复文章加密页小 bug
4. 【修复】修复 IOS 时间显示不正确的 bug
5. 【修复】修复 `publish: false` 的文章在标签页显示的 bug [@SigureMo](https://github.com/SigureMo)
6. 【修复】修复 `@vuepress/plugin-medium-zoom` 无效的 bug [@SigureMo](https://github.com/SigureMo)
7. 【修复】修复 `vssue` 在切换页面时不刷新的 bug [@SigureMo](https://github.com/SigureMo)
8.  【插件】板娘插件优化 [@橘子](https://github.com/smallsunnyfox)
9.  【插件】增加代码分栏插件 [文档](/views/plugins/extractCode.md)

---

**[2019-10-20]** 更新 `1.1.0`

1. 【增加】增加发布状态 [@橘子](https://github.com/smallsunnyfox)
2. 【增加】首页增加分页
3. 【增加】首页和标签页的标签列表增加全部按钮
4. 【增加】增加腾讯 404 公益页面 [文档](/views/1.x/404.md)
5. 【增加】自定义首页 [文档](/views/1.x/home.md#option-api)
6. 【增加】文章发布状态 [文档](/views/1.x/frontMatter.md#publish)
7. 【修复】文章时间可以填写 `时分秒` [@TankRyze](https://github.com/TankRyze)
8. 【修复】修复回到顶部按钮动画
9. 【修复】修复博客风格首页的信息栏的宽度问题
10. 【修复】修复第一次进入某篇加密文章，加密失效的 bug [@TankRyze](https://github.com/TankRyze)
11. 【重构】使用最新（重构）的 `@vuepress-reco/plugin-blog` 实现分类和标签
12. 【重构】重构时间轴，精简用户配置 [文档](/views/1.x/timeline.md)
13. 【插件】封装评论插件
14. 【插件】封装 `Google Analytic` 插件
15. 【插件】封装分页插件
16. 【插件】封装加载页插件
17. 【插件】封装封装全屏功能插件
18. 【插件】封装看板娘插件 [@橘子](https://github.com/smallsunnyfox)

---

**[2019-09-01]** 更新 `1.0.8`

1. 【调整】在 `GitHub` 成立 `vuepress-reco`，此后主题相关内容将全部发布在其名下
2. 【修复】切换颜色后，navbar 的颜色高亮错误
3. 【修复】时间轴的日期显示 `NaN`
4. 【修复】非根域名下，博客风格首页的 banner 显示错误
5. 【修复】文章条目的标签按钮跳转不显示当前标签的内容
6. 【优化】加密页的动画效果
7. 【优化】分类页面分类按钮的点击事件触发范围，原来只有点击文字才可以跳转
8. 【增加】颜色板支持自定义 [文档](/views/1.x/themePicker.html#禁用)
9. 【增加】加载页
10. 【增加】导航栏增加全屏按钮（仅PC有效）
11. 【删除】夜色模式

---

**[2019-08-4]** 更新 `1.0.4`

1. 【修复】非域名根目录下的项目的图片显示 bug
2. 【修复】非域名根目录下的项目路由跳转不正常的 bug
3. 【修复】切换主题色后部分地方无效的 bug
4. 【优化】优化“回到顶部”按钮的动画效果
5. 【优化】博客风格首页的文案位置
6. 【修改】博客风格首页默认图片
7. 【增加】增加 Ubuntu 字体支持
8. 【增加】增加好多好多内置 [icon](/views/1.x/configJs.html#图标)

---

**[2019-07-21]** 更新 `1.0.3`

1. 【优化】密码页显示规则不正确
2. 【优化】首页博客文章的数据与实际不符
3. 【优化】首页文章列表的数据的浏览量显示不正确
4. 【优化】渲染动画效果
5. 【修改】华为文案，默认隐藏
6. 【修改】分类页面增加分类快捷按钮

---

**[2019-07-08]** 更新 `1.0.2`

blog 风格的首页统计数不增加的bug，已解决。

---

**[2019-07-07]** 更新 `1.0.1`

`valine@1.3.8` 存在首页和列表页统计数为 0 的bug，所以将版本降至 `1.3.6`，以上问题解决，但是首页统计数存在不增加的bug，已将问题反馈给 valine 作者。

---

**[2019-07-06]** 正式更新 `1.0.0`

1. 博客风格首页图片可以自定义样式，信息更加丰富；
2. `valine` 更新 `1.3.8`。

---

**[2019-06-25]** 更新 `1.0.0-alpha.28`

:::danger
由于 LeanCloud 国内域名解析问题，造成 LeanCloud 相关 API 不可用。Valine 目前版本的数据存储全依托于 LeanCloud，也受到此次事故波及。

`1.0.0-alpha.28` 中已经对 `valine` 进行了升级，请各位朋友抓紧升级。
:::

---

**[2019-06-06]** 更新 `1.0.0-alpha.25`，优化 404 页面；增加博客风格首页，见 [文档](../1.x/home.md)。

---

**[2019-06-06]** 更新 `1.0.0-alpha.23`， 修复文章内容宽度最大宽度失效的问题。

vuepress 官方将 markdown 解析后内容的最外层的 className 由 `content default` 改为 `content__default`，所以导致样式出现bug。

---

**[2019-05-25]** 更新 `1.0.0-alpha.22`
  1. 优化侧边栏高亮显示；
  2. 首页增加 “华为” 文案，主题将以这样的方式支持 “华为”，可以控制它显示和隐藏，详情见 [文档](/views/1.x/configJs.html#华为文案)。

---

**[2019-05-23]** `markdown-it-mermaid` 不生效，暂时无解，见 [Has anyone gotten mermaid working?](https://github.com/vuejs/vuepress/issues/111)。

---

**[2019-05-09]** 
  1. 如果你没有使用 `valine` 评论功能，编译会报错，请将版本提升至 `1.0.0-alpha.-19`；
  2. 如果编译报错 `Module not found: Error: Can't resolve 'leancloud-storage'`，请在当前项目手动添加 `leancloud-storage`、 `valine` 这两个依赖包。

---

**[2019-05-08]** 更新 `1.0.0-alpha.18`
  1. 由于目前使用 `vuepress@1.x` 的同学比较多，所以开始将最新版本放在 `dist-tag` 的 `latest` 里，可以直接使用 `npm install vuepress-theme-reco` 安装，无需再添加 `@next`；
  2. 首页页脚增加备案显示，[文档](/views/1.x/configJs.html#备案信息和项目开始时间)；
  3. 开放 `valine` 的配置，主要开放的是邮件提醒功能的配置，[文档](/views/1.x/valine.html)；
  4. 可以单独针对某篇文章进行加密，[文档](/views/1.x/password.html#文章加密)；
  5. 分页功能优化；
  6. 样式优化。

---

**[2019-04-22]** 如果 `cnpm` 无法安装，请使用 `npm` 或 `yarn`。

---

**[2019-04-21]** 更新 `1.0.0-alpha.16`，修复 “博客和标签设置导致导航按钮重复展示” 的bug。