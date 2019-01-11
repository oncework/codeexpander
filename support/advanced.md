---
description: Snippets can be either Plain Text or a script.
---

# Text & Script

## Plain Text Snippets

As the name implies, `plain text` snippet insert unformatted text. In most cases, all you need is plain text. 

* In the snippet format drop-down menu, choose `Text` as the format type. 
* In the snippet field, you may enter:
  * Plain Text
  * [KeyBoard Component](keyboard-component.md)
  * [Calendar Component](calendar-component.md)
  * [Fill-In Component](fill-in.md)

![](../.gitbook/assets/image.png)

## Script Snippets

Snippets are functional snippets provided to people with a certain amount of `coding power` or written by them and shared with others.

It has great flexibility to meet most `dynamic requirements`. However, the build environment depends on the native environment, so you need to install the associated build environment.

> Its built-in function: clipboard properties `ONCEWORK_CLIPBOARD`

![Example: All uppercase clipboard contents](../.gitbook/assets/image%20%283%29.png)

### Javascript

For simple example:

* In the snippet format drop-down menu, choose `Javascript` as the format type. 
* In the snippet field, enter such a javascript script

  ```text
  console.log("Hello world");
  ```

![](../.gitbook/assets/image%20%281%29.png)

> `Oncework` captures the output of the `console` and returns it to the consumer, because it is an essential element of the entire javascript, otherwise it gets nothing.

### Shell

For simple example:

* In the snippet format drop-down menu, choose `Shell` as the format type.
* In the snippet field, enter such a shell script

  ```text
  #!/bin/sh
  echo $ONCEWORK_CLIPBOARD
  ```

> `Oncework` captures the output of the `echo` and returns it to the consumer, because it is an essential element of the entire javascript, otherwise it gets nothing.

### Python

For simple example:

* In the snippet format drop-down menu, choose `Python` as the format type.
* In the snippet field, enter such a shell script

  ```text
  print(ONCEWORK_CLIPBOARD)
  ```

> `Oncework` captures the output of the `print` and returns it to the consumer, because it is an essential element of the entire javascript, otherwise it gets nothing.

### AppleScript

Same as above.

