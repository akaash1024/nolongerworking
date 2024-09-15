// {} this is called scope 

// function sayMyName(num1,num2) {  // here, num1, num2 are paremeters
//     console.log(num1,num2)
// }

// sayMyName(10,20) //here, 10 and 20 are arguments 

// function loginUser(userName="demo name if argument not giving "){
//     if (!userName){ // here, "!" making false like, line 18, is username false ?!, yes it is...
//         console.log("Please give username");
//         return
//     }
//     return `${userName} just logged in`
// }

// console.log(loginUser("Akash"))
// console.log(loginUser());


//>>>>>>>>>>>>>>>>>>>>>>>REST Operator 

function calculateCartValue(val1,val2,...num1){  //this is called rest operator 
    return num1 //this will return only REST value as, val1 and val2 took 200 and 400 respectively
}

// console.log(calculateCartValue(200,400,500,6000));






//with Objects >>>>>>>>>>>>>>>>

const user = {
    userName: "Akash",
    price: 200
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user); //we can pass both methos and works fine
// handleObject({      //we can pass both methos and works fine 
//     userName:"test",
//     price: 400

// })



//with Array  >>>>>>>>>>>>>>>>

const myNewArray = [200, 400, 600, 800]


function returneSecondValue(getArr){
    return getArr[1]
}

// console.log(returneSecondValue(myNewArray)) //when using exiting array 

console.log(returneSecondValue([1000,2000]));



// ------------------------------------------

// function declaration
function greet(greeting, name){
    return `${greeting}, from ${name}`;
}

// function expression
let greet2=function(greeting, name){
    return `${greeting}, from ${name}`;
};

//arrow function
let greet = (greeting, name) => {
    return `${greeting}, from ${name}`;
}

//or
let greet = name => `hello, from ${name}`;  //todays' industry practice
let greet = (name) => ({name:"Vivek"})
console.log(greet("Vivek"));
