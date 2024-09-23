// ## **Explicit Conversion Functions in JavaScript**

// JavaScript provides several functions for converting to different data types:

// - **`String()`**: Converts to string.
// - **`Number()`**: Converts to number.
// - **`Boolean()`**: Converts to boolean.
// - **`parseInt()`**: Parses a string and returns an integer.
// - **`parseFloat()`**: Parses a string and returns a floating-point number.

//+++++++++++++++++++++++++++++++++++++
//String Conversion

`
Converting Numbers and Booleans to Strings
String(123) = "123"
(123).toString() = "123"
String(true) = "true"
(false).toString() = "false"

+++++++++++++++++++++++++++++++++++++++++++++

Converting 
Arrays and Objects to Strings
String([1,2,3]) = "1,2,3"
[1,2,3].toString() = "1,2,3"
String({key: 'value'}) = "[object Object]"

`

//+++++++++++++++++++++++++++++++++++++
//Numeric Conversion

`
Number("123") = 123
parseInt("123px") = 123
parseFloat("3.14em") = 3.14
Number(false) = 0

//Special Cases
Number("abc") = NaN
Number(undefined) = NaN
`

//+++++++++++++++++++++++++++++++++++++
//Boolean Conversion
`
Boolean(0) = false
Boolean("hello") = true
Boolean({}) = true
Boolean(undefined) = false

`