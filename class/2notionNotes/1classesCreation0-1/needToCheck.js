class Animal {
    constructor(noOfLegs, vegetarian) {
        this.noOfLegs = noOfLegs;
        this.vegetarian = vegetarian;
        
        // Arrow function for eat, safe because it does not use 'this'
        this.eat = () => {
            console.log('eating...');
        };
    }

    // Regular function for greet, as it uses 'this'
    greet() {
        console.log(`Hi, I have ${this.noOfLegs} legs.`);
    }
}

// Example invocation
let a1 = new Animal(4, true);
a1.eat();   // eating...
a1.greet(); // Hi, I have 4 legs.


