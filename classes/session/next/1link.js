//Linking object to object with Prototype chain

// let user = {
//     name: "vivek",
//     sayHello: function () {
//       console.log("Hello from user");
//     },
//   };

//   let workInfo = {
//     salary: 100000,
//     work: function () {
//       console.log("Working");
//     },
//   };

//   Object.setPrototypeOf(workInfo, user);

//   workInfo.work(); // "Working"
//   workInfo.sayHello(); // "Hello"

//++++++++++++++++++++++++++++

//chainign

function person() {}

// you can add properties and methods to prototype
person.prototype.greet = function () {
  console.log(`Greeting!`);
};

// you can chain prototype of one function to another
function engineer() {}
engineer.prototype.code = function () {
  console.log(`<Coding>`);
};

Object.setPrototypeOf(engineer.prototype, person.prototype);

engineer.prototype.code(); // <Coding>
engineer.prototype.greet(); // Greeting!

// you can chain it with any other oject
let worker = {
  job: "Engineer",
  work: function () {
    console.log("Working as an Engineer");
  },
};

Object.setPrototypeOf(worker, person.prototype);

worker.work(); // Working as an Engineer
worker.greet(); // Hello World!
