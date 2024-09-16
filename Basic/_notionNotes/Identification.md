# The typeof Operator
    - 

    - console.log(typeof 42); // "number"
    - console.log(typeof 'Hello World'); // "string"
    - console.log(typeof true); // "boolean"
    - console.log(typeof undefined); // "undefined"

    - console.log(typeof function(){}); // "function"
>   
    -Object MUST remembe
    - console.log(typeof null); // "object" (this is a known JavaScript - quirk)
    - console.log(typeof {}); // "object"
    - console.log(typeof []); // "object" (Array is a type of object)



# The instanceof Operator
    - The instanceof operator is used to check the type of an object against a prototype.
>   
    - console.log({} instanceof Object); // true
    - console.log([] instanceof Array); // true
    - console.log([] instanceof Object); // true (because Array's - - prototype chain includes Object)
    - console.log(function(){} instanceof Function); // true


