---
title: KeyBoard
date: 2020-01-11
---

## KeyBoard Tool

The keyboard will simulate a keyboard operation, and each simulated key will be followed by the next simulated key.

![](http://oss.codeexpander.com/i/keyboard.gif)

- `Enter、Esc、Tab`
- `Composite Keyboard`

![Operating options](http://oss.codeexpander.com/i/keyboard-ui.png)

![Operating custom](http://oss.codeexpander.com/i/keyboard-ui-setting.png)

## Composite Keyboard

For simple example:

- In the snippet format drop-down menu, choose `Text` as the format type.
- In the snippet field, enter such a `Text`

  ```text
  // Enter %clavier&key=Enter%
  // Copy from the clipboard
  %clavier&key=V&modifier=command%
  // Select and clear everything
  %clavier&key=A&modifier=command% %clavier&key=Backspace%
  ```
