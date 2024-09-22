function Introduce(greeting) {
  let greet = greeting;
  let name = this.name;
  let age = this.age;

  console.log(`${greet}! I am ${name} & I am ${age} years old.`);
}

Introduce.call({ name: "Vivek", age: 40 }, "Hello");
// Hello! I am Vivek & I am 40 years old.

//https://www.canva.com/design/DAGRTHgPh5Y/X6q3_b6nwGmSzVlm9tikOw/view?utm_content=DAGRTHgPh5Y&utm_campaign=designshare&utm_medium=link&utm_source=editor

//need to read thrice

//   let thisObjOfEmployee = {
//     department: "Sales",
//     salary: 100000,
//   };

//   function Person(obj) {
//     obj.firstName = "John";
//     obj.lastName = "Johnson";
//     obj.age = 25;
//   }

//   // Person(thisObjOfEmployee);
//   // console.log(thisObjOfEmployee);

//



//here
//here
//here
//here
//here


//compararion line 33  to 94
// function createIPhone1(ID, color, display, weight) {
//   let obj = {};

//   obj.id = ID;
//   obj.color = color;
//   obj.display = display;
//   obj.weight = weight;

//   obj.dial = function () {
//     console.log("tring.. tring...");
//   };

//   obj.sendMessage = function () {
//     console.log("Sending message...");
//   };

//   return obj;
// }

// // creating objects
// let i1 = new createIPhone1(1, "black", "128GB", 1000);
// let i2 = new createIPhone1(2, "red", "128GB", 1000);
// let i3 = new createIPhone1(3, "green", "128GB", 1000);
// let i4 = new createIPhone1(4, "blue", "128GB", 1000);
// let i5 = new createIPhone1(5, "gray", "128GB", 1000);

// i1.dial();
// i1.sendMessage();
// console.log(i1);


// //
// IPhone1.prototype.dial = function () {
//     console.log("tring.. tring...");
//   };
  
//   IPhone1.prototype.sendMessage = function () {
//     console.log("Sending message...");
//   };
  
//   function IPhone1(ID, color, display, weight) {
//     let obj = {};
//     Object.setPrototypeOf(obj, IPhone1.prototype);
  
//     obj.id = ID;
//     obj.color = color;
//     obj.display = display;
//     obj.weight = weight;
  
//     return obj;
//   }
  
//   let i1 = new IPhone1(1, "black", "128GB", 1000);
//   let i2 = new IPhone1(2, "red", "128GB", 1000);
//   let i3 = new IPhone1(3, "green", "128GB", 1000);
//   let i4 = new IPhone1(4, "blue", "128GB", 1000);
//   let i5 = new IPhone1(5, "gray", "128GB", 1000);
  
//   i1.dial();
//   i1.sendMessage();
//   console.log(i1);

//
