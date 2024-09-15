/*
singleton // creating object using constructor //shorthand if made by constructor then its singleton

⚠️⚠️⚠️ object.create //constructor method through //
*/


//>>>>>>>>>>>>>>>>>>his is object literals <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ### use from here

const mySym = Symbol("key1")
const JsUser = {
    name : "Akash",
    "full name": "Akash Rambahadur Kevat", //thats why you should know about this method. 
    // mySym:"key1", //line 29: we cant use like that
    [mySym]:"mykey1",
    age : 18,
    location : "Ahmedabad",
    email: "akashkewat99@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser['age']);
// console.log(JsUser["full name"]); //thats why you should know about this method. ⚠️SPACE 

// console.log(JsUser.mySym,typeof JsUser.mySym); //line 16: giving "string" we cant use like that

// console.log(JsUser[mySym]); //using this way for symbols 

// JsUser.email="umeba@gmail.com"
// // Object.freeze(JsUser)
// JsUser.email="again@gmail.com"
// // console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser);

JsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`); //this refere to current context
}



// console.log(JsUser.greeting); //returns [Function (anonymous)], not excute only returns⚠️ the reference 
// console.log(JsUser.greeting()); 

console.log(JsUser.greetingTwo());





