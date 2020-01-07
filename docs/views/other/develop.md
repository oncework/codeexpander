---
title: 开发者规范
date: 2019-09-30
lang: 'zh-CN'
sidebar: 'auto'
categories:
 - blog
---

:::warning
1. 以下内容针对已加入项目的开发者；
2. 请按照文档中标红部分严格规范自己；
3. <span style="color: red">**本主题以“简洁”为终极开发准则，包括效果和代码**；</span>
4. <span style="color: red">**请认真对待每一个功能需求和每一行代码，用最精简的代码写最优秀的功能，切勿随意摘抄其他优秀开源代码，那对你没有任何意义**；</span>
5. 请开发者在正式开发之前，仔细阅读本规范，并仔细研读项目公共代码和对应的功能代码，以避免产生意外冲突；
6. 开发规范，大家根据项目需要随时补充；
7. 按照 **[Trello](https://trello.com/vuepressreco)** 的未进行的和进行中的计划来进行开发，如果决定开发某个卡片里的内容，请在开发群里说一下，避免重复开发；
8. 如果有新的需求或功能调整和重构，要在交流群里进行需求调研，开发者群有多数否决权，项目管理员有1/5的投票权。
:::

## 项目规范

1. <span style="color: red">开发者应新建功能分支 `feature/xxx`，自测无误后合向 `develop` 分支提交 `merge` 请求，管理员检查无误后批准请求；</span>
2. <span style="color: red">代码提交前要清空测试代码，请确认本次提交是一次完整功能，而不是零星的代码调整；</span>
3. <span style="color: red">代码提交规范使用 `Angular 规范` （精简版），见 [详情](http://www.ruanyifeng.com/blog/2016/01/commit_message_change_log.html)；</span>
   1. `Header` 中的 `scope` 不需要说明；
   2. `subject` 可以将提交描述清楚话，就尽量不要使用 `Body` 来详细说明；
   3. `Footer` 严格按照规范来说明。
4. 独立功能要尽量封装成插件，精简核心代码。

## 代码规范

1. 编辑器务必添加 `Eslint` 检测插件，按照项目执行的 `Eslint` 规范书写代码：
   1. 表达式结尾不能使用 `;`；
   2. 函数小括号前后都要有空格等等；
2. 请尽量遵循 `ES6/7/8/9` 规范：
   1. 不可以用 `var` 来定义变量；
3. <span style="color: red">保证函数功能的单一性，减少函数间耦合；</span>
4. 充分利用 `stylus` 的变量、函数、计算等功能。

## 测试

1. <span style="color: red">涉及 `JS` 的代码，一定要经过编译测试后，方可提交。</span>
