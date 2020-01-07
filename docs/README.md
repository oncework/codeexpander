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
  - title: 过去
    details: 开发一款看着开心、写着顺手的 vuepress 博客主题。
  - title: 当下
    details: 帮助更多的朋友节省时间去用心书写内容，而不是仅仅配置一个博客去孤芳自赏。
  - title: 未来
    details: 吸引更多的朋友参与到开发中来，继续强大功能。
---

## 更新记录 [更多+](/views/other/notice)

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

## 快速开始

**npx**

```
npx @vuepress-reco/theme-cli init my-blog
```

**npm**

```bash
# 初始化
npm install @vuepress-reco/theme-cli -g
theme-cli init my-blog

# 安装
cd my-blog
npm install

# 运行
npm run dev

# 编译
npm run build
```

**yarn**

```bash
# 初始化
yarn global add @vuepress-reco/theme-cli
theme-cli init my-blog

# 安装
cd my-blog
yarn install
```

## 贡献者

<Contributors user="vuepress-reco" repo="vuepress-theme-reco" :show-title="true"></Contributors>
<Contributors user="vuepress-reco" repo="vuepress-reco.github.io" :show-title="true"></Contributors>
