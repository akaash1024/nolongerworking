


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

Object.setPrototypeOf(engineer.prototype, person.prototype); //notes(*)

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


//notes(*)
//You can't use engineer directly (like Object.setPrototypeOf(engineer, person)) because engineer is a function, and JavaScript does not use functions themselves for inheritance. Instead, it uses the prototype property of functions. When you create an object using new engineer(), that object will inherit from engineer.prototype, not from engineer itself.



//+++++++++++++++++++++++++++++++++++++++++From here++++++++++++++++++++++++++++++++++++++\\




function Animal() {}

// Attach a function `sleep` to Animal's prototype object.
// Sleep should output a message to the console: "sleeping!"

Animal.prototype.sleep = function () {
  console.log("sleeping!");
};

function Dog() {}

// Create a chain from Dog to Animal
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

let pet = {
  name: "Tommy",
};

// set prototype of pet to be Dog
Object.setPrototypeOf(pet, Dog.prototype);

// Object.assign(pet,Animal.prototype,Dog.prototype)  //this is alternate (**)(**)(**)🔴

pet.sleep(); // sleeping!




