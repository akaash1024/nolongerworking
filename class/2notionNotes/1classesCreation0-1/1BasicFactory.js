function iPhone1(ASIN, color, display, camera) {
  let obj = {};

  obj.color = color;
  obj.display = display;

  //MUST READ//both dial and sendmessage are function (method)
  //🔴🔴🔴here not prototype but called "Method" in obj

  obj.dial = function () {
    //Here
    console.log("tring.. tring...");
  };

  obj.sendMessage = function () {
    //Here
    console.log("Sending message...");
  };

  return obj;
}

let i1 = iPhone1("Gray", "90mm");
i1.dial(); // "tring.. tring..."
i1.sendMessage(); // "Sending message..."

console.log(iPhone1.prototype); //must run and check, getting empty object because not prototype add yet.

//++++++++++++++++++++++++++++++++++++++\\
function createCat(name, power) {
  let obj = {};

  obj.name = name;
  obj.power = power;

  obj.displayPower = function () {
    return `${obj.name}: ${obj.power}`;
  };

  return obj;
}

function createMouse(name) {
  let obj = {};

  obj.name = name;
  obj.kick = function (catObject) {
    catObject.power -= 10;
  };

  return obj;
}

// example invocation
let tom = createCat("Tom", 100);
let jerry = createMouse("Jerry");

console.log(tom.displayPower()); // Tom: 100
jerry.kick(tom);
console.log(tom.displayPower()); // Tom: 90
jerry.kick(tom);
console.log(tom.displayPower()); // Tom: 80

console.log(tom);
console.log(jerry);

//*******converting above factory function to constructor function */

// Convert these factory functions to constructor functions

// function CreateCat(name, power) {
//   this.name = name;
//   this.power = power;

//   this.displayPower = function () {
//     return `${this.name}: ${this.power}`;
//   };
// }

// function CreateMouse(name) {
//   this.name = name;
//   this.kick = function (catObject) {
//     catObject.power -= 10;
//   };
// }

// // example invocation
// let tom = new CreateCat("Tom", 100);
// let jerry = new CreateMouse("Jerry");

// console.log(tom.displayPower()); // Tom: 100
// jerry.kick(tom);
// console.log(tom.displayPower()); // Tom: 90
// jerry.kick(tom);
// console.log(tom.displayPower()); // Tom: 80

// console.log(tom);
// console.log(jerry);


