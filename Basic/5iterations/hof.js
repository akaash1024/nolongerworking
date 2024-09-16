
function calculate(a, b, operation) {
    return operation(a, b);
}


const add = (x, y) => x + y;


let result = (calculate(5, 3, add)); 

console.log(result)