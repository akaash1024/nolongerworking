class Animal {
  constructor(noOfLegs, vegetarian) {
    this.noOfLegs = noOfLegs;
    this.vegetarian = vegetarian;
  }

//  1. Modern class syntax:
  eat() {
    console.log(`eating...`);
  };

  greet() {
    console.log(`Hi, I have ${this.noOfLegs} legs.`);
  };
}

//2. Traditional prototype assignment:
Animal.prototype.sendMessage = function() {
  console.log("Sending message...");
};

// example invocation
let a1 = new Animal(4, true);
a1.eat(); // eating...
a1.greet(); // Hi, I have 4 legs.
