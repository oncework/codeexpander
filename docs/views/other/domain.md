---
title: Pages 自定义域名
date: 2019-05-06
lang: 'zh-CN'
categories:
 - blog
---

<style>
table th:first-of-type {
	width: 400px;
}
</style>

## 自定义域名

### GitLab

#### 添加域名

点击 `设置 --> Pages` 的 `New Domain` 按钮，来添加你自己的域名（证书和密钥可以先不添加）

#### 解析域名

<table>
  <tr>
    <th style="width:55rem">主域名</th>
    <th style="width:55rem">解析类型</th>
    <th style="width:55rem">解析值</th>
    <th style="width:27rem">作用</th>
  </tr>
  <tr>
    <td>domain.com</td>
    <td>A</td>
    <td>35.185.44.232</td>
    <td>解析</td>
  </tr>
  <tr>
    <td>www.domain.com</td>
    <td>A</td>
    <td>35.185.44.232</td>
    <td>解析</td>
  </tr>
  <tr>
    <td>_gitlab-pages-verification-code.www.domain.com</td>
    <td style="width:55rem">TXT</td>
    <td>gitlab-pages-verification-code=00112233445566778899aabbccddeeff</td>
    <td style="width:55rem">校验</td>
  </tr>
</table>

<table>
  <tr>
    <th style="width:55rem">子域名</th>
    <th style="width:55rem">解析类型</th>
    <th style="width:55rem">解析值</th>
    <th style="width:27rem">作用</th>
  </tr>
  <tr>
    <td>subdomain.domain.com</td>
    <td>CNAME</td>
    <td>namespace.gitlab.io</td>
    <td>解析</td>
  </tr>
  <tr>
    <td>_gitlab-pages-verification-code.subdomain.domain.com</td>
    <td style="width:55rem">TXT</td>
    <td>gitlab-pages-verification-code=00112233445566778899aabbccddeeff</td>
    <td style="width:55rem">校验</td>
  </tr>
</table>

### GitHub

1. 解析域名。在你的域名服务平台的控制台进行解析，设置两条记录，记录的类型都选择 `CNAME`，记录值都选择 `nickname.github.io`，主机记录一条为空，另一条填写 `www`；
2. 设置 `pages`。在github上打开你的工程，点击 `Settings`，然后找到 `GitHub Pages` 下的 `Custom domain` ，填写你的 `www` 域名，点击 `save` 保存，这时域名就可以访问到你的网站了；
3. 修复本地工程。`GitHub` 工程里会出现一个`CNAME` 文件里面写着你域名，见这个文件放到你的本地工程的所用主题下的source文件夹下，不然下次发布时会清空这个文件。

## 免费HTTPS证书

1. [申请网址](https://freessl.cn)
2. [申请教程](https://blog.freessl.cn/how-to-use-freessl-issue-free-certificates/)
3. [域名验证](https://blog.freessl.cn/free-certificate-verification-guide/)