let user = {
  name: "vivek",
  sayHello: function () {
    console.log("Hello");
  },
};

let workInfo = {
  salary: 100000,
  work: function () {
    console.log("Working");
  },
  // __proto__:user,                        //(*)(*)(*)(*)(*) OR 
};

workInfo.__proto__ = user;                  //(*)(*)(*)(*)(*) OR

Object.setPrototypeOf(workInfo, user);      //(*)(*)(*)(*)(*) OR

workInfo.work(); // "Working"
workInfo.sayHello(); // "Hello"


//MST READ
//(*)(*)(*)(*)(*)
//__proto__ is an older, informal way to get/set the prototype.
//Object.setPrototypeOf is the modern, preferred method to set an object's prototype.




//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

//Good Practice for industry level using Object.create(user)

// let user = {
//     name: "vivek",
//     sayHello: function () {
//       console.log("Hello");
//     },
//   };

//   // Create another empty object for workInfo. user is set as the prototype of workInfo
//   let workInfo = Object.create(user);

//   // Add properties and methods to the workInfo object
//   workInfo.salary = 100000;
//   workInfo.work = function() {
//       console.log("Working");
//   };

//   workInfo.work(); // "Working"
//   workInfo.sayHello(); // "Hello"



//##NOTE
// ## Every function has a built in `prototype` object
// Every function in JavaScript automatically has a property named `prototype`. This property is an **`object`**. You can add properties and methods to the `prototype` ****just like any other object. You can create a prototype chain of `prototype` ****with any other object.