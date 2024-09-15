// Primitive
//7 types : String , Number , Boolean, Null: Empty, undefiend : undefiend , symbol: make unique, bigint

// ************************************************************

//Reference / Non-Primitive 
//Array, Objects, functions  // all return type is called object and for function is called function object


// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive)  , Heap (non-primitive / referance) 
//[stack and heap in js language] 
//P.s In pyTutor is called accordingly python language [Frames and object]

// let myold = "akash1999";
// let newValue = myold;

// newValue = "logN";

// console.log(myold)
// console.log(newValue);

// -----------------------------------



//Reference
let userOne = {
    email : "user@google.com",
    upi : "akkash@tbl"
}
console.log("userOne", userOne)

let userTwo =userOne;
console.log("userTwo", userTwo)

userOne.email = "ba@gmail.com"

console.log(userOne)
console.log(userTwo)






