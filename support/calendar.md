# Calendar

## Calendar Tool

Fast insert date anywhere. Add a future expiration date to your mail, a current date to your file name, all using a calendar.

* `Short、Medium、Long、Full`
* `Custom Date Format`

![](../.gitbook/assets/image%20%2811%29.png)

### Basic **Localized formats**

|  | **Token** | Output |
| :--- | :--- | :--- |
| Time | LT | 8:30 PM |
| Time with seconds | LTS | 8:30:25 PM |
| Month numeral, day of month, year | L | 09/04/1986 |
|  | l | 9/4/1986 |
| Month name, day of month, year | LL | 4-Sep-86 |
|  | ll | 4-Sep-86 |
| Month name, day of month, year, time | LLL | 1986/9/4 20:30 |
|  | lll | 1986/9/4 20:30 |
| Month name, day of month, day of week, year, time | LLLL | Thursday, September 4, 1986 8:30 PM |
|  | llll | Thu, Sep 4, 1986 8:30 PM |

## Custom Date Format

You can choose or customize the date format to support international standards.

![](../.gitbook/assets/image%20%286%29.png)

{% embed url="https://gist.github.com/xudaolong/f1eb82cf68a9dc54acc5a0e49b76cea9" %}

![](../.gitbook/assets/date.gif)

### **Formats** Reference

|  | Token | Output |
| :--- | :--- | :--- |
| Month | M | 1 2 ... 11 12 |
|  | Mo | 1st 2nd ... 11th 12th |
|  | MM | 01 02 ... 11 12 |
|  | MMM | Jan Feb ... Nov Dec |
|  | MMMM | January February ... November December |
| Quarter | Q | 1 2 3 4 |
|  | Qo | 1st 2nd 3rd 4th |
| Day of Month | D | 1 2 ... 30 31 |
|  | Do | 1st 2nd ... 30th 31st |
|  | DD | 01 02 ... 30 31 |
| Day of Year | DDD | 1 2 ... 364 365 |
|  | DDDo | 1st 2nd ... 364th 365th |
|  | DDDD | 001 002 ... 364 365 |
| Day of Week | d | 0 1 ... 5 6 |
|  | do | 0th 1st ... 5th 6th |
|  | dd | Su Mo ... Fr Sa |
|  | ddd | Sun Mon ... Fri Sat |
|  | dddd | Sunday Monday ... Friday Saturday |
| Day of Week \(Locale\) | e | 0 1 ... 5 6 |
| Day of Week \(ISO\) | E | 1 2 ... 6 7 |
| Week of Year | w | 1 2 ... 52 53 |
|  | wo | 1st 2nd ... 52nd 53rd |
|  | ww | 01 02 ... 52 53 |
| Week of Year \(ISO\) | W | 1 2 ... 52 53 |
|  | Wo | 1st 2nd ... 52nd 53rd |
|  | WW | 01 02 ... 52 53 |
| Year | YY | 70 71 ... 29 30 |
|  | YYYY | 1970 1971 ... 2029 2030 |
|  | Y | 1970 1971 ... 9999 +10000 +10001  |
| Week Year | gg | 70 71 ... 29 30 |
|  | gggg | 1970 1971 ... 2029 2030 |
| Week Year \(ISO\) | GG | 70 71 ... 29 30 |
|  | GGGG | 1970 1971 ... 2029 2030 |
| AM/PM | A | AM PM |
|  | a | am pm |
| Hour | H | 0 1 ... 22 23 |
|  | HH | 00 01 ... 22 23 |
|  | h | 1 2 ... 11 12 |
|  | hh | 01 02 ... 11 12 |
|  | k | 1 2 ... 23 24 |
|  | kk | 01 02 ... 23 24 |
| Minute | m | 0 1 ... 58 59 |
|  | mm | 00 01 ... 58 59 |
| Second | s | 0 1 ... 58 59 |
|  | ss | 00 01 ... 58 59 |
| Fractional Second | S | 0 1 ... 8 9 |
|  | SS | 00 01 ... 98 99 |
|  | SSS | 000 001 ... 998 999 |
|  | SSSS ... SSSSSSSSS | 000\[0..\] 001\[0..\] ... 998\[0..\] 999\[0..\] |
| Time Zone | z or zz | EST CST ... MST PST |
|  | Z | -07:00 -06:00 ... +06:00 +07:00 |
|  | ZZ | -0700 -0600 ... +0600 +0700 |
| Unix Timestamp | X | 1360013296 |
| Unix Millisecond Timestamp | x | 1.36001E+12 |

