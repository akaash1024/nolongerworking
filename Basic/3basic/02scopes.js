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
// console.log("c",c); //this will rerurn you 1000 from line10. which is not excuated yet. thats the problem with var

// // END

// >>>>>>>>>>>

function one(){
    const userName = "Akash"

    function two(){
        const website = "youtube"
        console.log(userName) //inner function can access outsides' function key and value like, "One is parent and Two is child"
    }
    two()
}

one() 

// //END


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

