// // this is '{}' scope

//>>>>>>>>>>>>>>>>>> https://www.youtube.com/watch?v=eWwge2YpHhc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=22

// // not using var

// var c =300

// if(true){
//     let a = 400
//     const b = 600
//     var c = 1000
// }

// // console.log("a",a);
// // console.log("b",b);
// console.log("c",c); //this will rerurn you 1000 from line12. which is not excuated yet. thats the problem with var

// // END

// >>>>>>>>>>>

function one(){
    const userName = "Akash"

    function two(){
        const website = "youtube"
        console.log(userName) //inner function can access outsides' function key and value like, "One is parent and Two is child"
    }
    // console.log(website); ///throw error
    
    two()
}

one() 

// //END


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Interesting <<<<<<<<<<<<<<<<<<<<<<<<<

// //START

// function addOne(num){
//     return num+1
// }
// // console.log(addOne(5));

// const addTwo = function(num){  //this is also function but most of time called "expression"
//     return num+2
// }
// console.log(addTwo(10));

// //END

// -------------------------------------------- Vivek Sir,

var a=4;
function foo(x){ //enter with 4
    var b=a*4; //b = 4*4 //16
    function bar(y){ //enter with 16
        var c=y*b; //16*16
        return c;
    }
    return bar(b); //going with 16
}

console.log(foo(a))