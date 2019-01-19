# KeyBoard

## KeyBoard Tool

The keyboard will simulate a keyboard operation, and each simulated key will be followed by the next simulated key.

![](../.gitbook/assets/keyboard.gif)

* `Enter、Esc、Tab`
* `Composite Keyboard`

![Operating options](../.gitbook/assets/image%20%287%29.png)

![Operating custom](../.gitbook/assets/image%20%2821%29.png)

## Composite Keyboard

For simple example:

* In the snippet format drop-down menu, choose `Text` as the format type.
* In the snippet field, enter such a  `Text`

  ```text
  // Enter %clavier&key=Enter% 
  // Copy from the clipboard
  %clavier&key=V&modifier=command%
  // Select and clear everything   
  %clavier&key=A&modifier=command% %clavier&key=Backspace%
  ```

