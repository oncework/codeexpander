---
title: 文本与脚本
date: 2020-01-11
---

# Text & Script

## 纯文本片段

顾名思义，`纯文本`片段插入无格式文本。在大多数情况下，您只需要纯文本。

- 在代码段格式下拉菜单中，选择`Text`作为格式类型。
- 在代码段字段中，您可以输入:
  - Plain Text
  - [Rich Text（富文本）](/views/advance/rich-text.html)
  - [KeyBoard（键盘）](/views/advance/keyboard.html)
  - [Calendar（日历）](/views/advance/calendar.html)
  - [Fill-In（自定义模板）](/views/advance/fill-in.html)

![](http://oss.codeexpander.com/i/text-script-ui.png)

## Script Snippets

片段是为具有一定`编码能力`的人提供的功能片段，或由他们编写并与他人共享。

它具有很大的灵活性，可以满足大多数`动态要求`。但是，构建环境依赖于本机环境，因此您需要安装关联的构建环境。

> 其内置功能: 剪贴板属性 `CODEEXPANDER_CLIPBOARD`

![示例：将剪贴板内容全部大写](http://oss.codeexpander.com/i/text-script-script.png)

### Javascript

举个简单的例子：

- 在代码段格式下拉菜单中，选择`Javascript`作为格式类型。
- 在代码段字段中，输入这样的`javascript`脚本

  ```javascript
  console.log("Hello world");
  ```

![](http://oss.codeexpander.com/i/text-script-js.png)

> `CodeExpander`捕获`console`的输出并将其返回，因为它是输出结果的重要组件，否则无法返回任何结果。

### Shell

举个简单的例子：

- 在代码段格式下拉菜单中，选择`Shell`作为格式类型。
- 在代码段字段中，输入此类`shell`脚本

  ```bash
  #!/bin/sh
  echo $CODEEXPANDER_CLIPBOARD
  ```

> `CodeExpander`捕获`echo`的输出并将其返回，因为它是输出结果的重要组件，否则无法返回任何结果。

### Python

举个简单的例子：

- 在代码段格式下拉菜单中，选择`Python`作为格式类型。
- 在代码段字段中，输入此类`python``脚本

  ```python
  print(CODEEXPANDER_CLIPBOARD)
  ```

> `CodeExpander`捕获`print`的输出并将其返回，因为它是输出结果的重要组件，否则无法返回任何结果。

### AppleScript

与上述相同。
