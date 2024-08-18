//https://www.youtube.com/watch?v=9ksqBa8_txM&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=23



// //START
// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`); //Here "this.username works only with 'OBJECTS'"
//         console.log(this);
//     }
// }

// // user.welcomeMessage()
// // user.username = "sam"
// // user.welcomeMessage()

// // console.log(this); //this will return here empty object cause we can use now NODE instead of browser
// //>>>>>>>>>>>>>>>>> browsers' global object is window if run in browers

// //END


// //START

// function chai(){
//     let userName = "hitesh";
//     console.log(this.userName);  //cant use "this.userName" like this in function works only in object.
//     console.log(this);    
// }
// chai()

// //END


// // ------------------------------
// const chai = function(){
//     let userName = "Akash2"
//     console.log(this.userName); //AUS undefined
// }
// chai()

////making arrow function using above code
//// //simply remove function except brackets and after brackets add => voilaaaa. 

// const chai = () => {
//     let userName = "Akash2"
//     console.log(this.userName); //AUS undefined
// }
// chai()


////////////// ______________________________________
////////////// starting pure arrow function from here

////// step 1
//// () => {} //take like this

////// step 2
//can hold in variable too,  so create vaiable with const and add "=" with parameters and last open the context/scope

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }                            
//orrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2) 
const addTwo = (num1, num2) => ({name: "Test"}) //when you want to return object

////////                 NOTE  - if brackets then no need to write "return" otherwise use in case of use parentheses

console.log(addTwo(3,5)); //easy right.. with steps
