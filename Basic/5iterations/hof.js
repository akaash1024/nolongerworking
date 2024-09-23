
// function calculate(a, b, operation) {
//     return operation(a,b)
// }

let calculate = (a,b,operation) => operation(a,b)

function add(a,b){
    return a+b;
}

console.log(calculate(10,15,add))



///++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++
///++++++++++++++++++++++++++++++++++++



const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;

console.log(calculate(5, 3, addition))
console.log(calculate(10, 4, subtraction))
console.log(calculate(10, 20, multiplication))


///++++++++++++++++++++++++++++++++++++

function mixerGrinder(fruit, blade) {
    // start motor()
    // change speed()
    // etc...
    return blade(fruit);
}

function orangeJuiceBlade(fruit) {
    return "Orange juice from " + fruit;
}

function appleJuiceBlade(fruit) {
    return "Apple juice from " + fruit;
}

function strawberrySmoothieBlade(fruit) {
    return "Strawberry smoothie from " + fruit;
}


console.log(mixerGrinder("oranges", orangeJuiceBlade));
console.log(mixerGrinder("apples", appleJuiceBlade));
console.log(mixerGrinder("strawberries", strawberrySmoothieBlade));
