---
description: >-
  The keyboard will simulate a keyboard operation, and each simulated key will
  be followed by the next simulated key.
---

# KeyBoard Component

## Default

* `Enter`
* `Esc`
* `Tab`

![Operating options](../.gitbook/assets/image%20%282%29.png)

## Composite Keyboard

For simple example:

* In the snippet format drop-down menu, choose `Text` as the format type.
* In the snippet field, enter such a clavier script

  ```text
  // Enter %clavier&key=Enter% 
  // Copy from the clipboard
  %clavier&key=V&modifier=command%
  // Select and clear everything   
  %clavier&key=A&modifier=command% %clavier&key=Backspace%
  ```

