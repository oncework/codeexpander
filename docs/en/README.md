---
home: true
heroImage: /icon.png
heroImageStyle:
  {
    maxWidth: "200px",
    width: "100%",
    display: block,
    margin: "5rem auto 2rem",
    background: "#fff",
    borderRadius: "1rem",
  }
isShowTitleInHome: true
actionText: "Getting Started"
actionLink: /views/other/about
features:
  - title: Yesterday
    details: Develop a vuepress blog theme that looks happy and writes smoothly.
  - title: Today
    details: Help more people spend more time on content creation than on blogging.
  - title: Tomorrow
    details: I hope more fans can get involved and help this theme grow better.
---

## Update Record [more+](/views/other/notice)

::: tip
**[2020-01-01]** 更新 `1.2.0`

1. 【修复】文章列表页跳转详情页，返回时无法记录列表当前的页码
2. 【修复】修复代码段过长导致博客首页布局错乱的 bug
3. 【增加】适配系统的暗色主题，首次加载默认自适应系统主题色，并可以通过原本自定义主题色按钮来切换自己喜欢的模式 [文档](/views/1.x/mode.md)
4. 【增加】`heroImage` 在 `type: 'blog'` 时仍然有效
5. 【增加】增加 ICP 备案链接和公安部备案配置 [文档](/views/1.x/configJs.md#备案信息和项目开始时间)
6. 【优化】将博文列表数据的处理逻辑，增加加载速度
7. 【优化】对密码进行了加密
8. 【修改】修改指定博客首页的信息栏头像的配置 [文档](/views/1.x/home.md#设置首页右侧信息栏头像)
9. 【删除】删除自定义主题色功能
10. 【删除】暂时删除全屏按钮
11. 【删除】删除文章列表页的浏览量，异步加载博客列表 [文档](/views/1.x/valine.md)
    :::

## Quick start

**npx**

```
npx @vuepress-reco/theme-cli init my-blog
```

**npm**

```bash
# init
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# install
cd my-blog
npm install

# run
npm run dev

# build
npm run build
```

**yarn**

```bash
# init
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# install
cd my-blog
yarn install
```

## Contributors

<Contributors user="vuepress-reco" repo="vuepress-theme-reco" :show-title="true"></Contributors>
<Contributors user="vuepress-reco" repo="vuepress-reco.github.io" :show-title="true"></Contributors>
