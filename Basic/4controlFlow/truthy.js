// falsy values
// false, 0, -0, BigInt, "" (empty string),null, undefined,NaN

//truthy values
//"0","false"//not empty string," ", [], {}, function(){}

// const userEmai = []
// if (userEmai.length===0){
//     console.log("Array is empty");
// }

// const emptyObj = {name:"Akash"}
// console.log(emptyObj);
// console.log(Object.keys); //return arr
// console.log(Object.values); //return arr
// if (Object.keys(emptyObj).length===0){
//     console.log("Object is empty");    
// }



/// Nullish coaleascing operator: null , undefined

// let val1 = 5 ?? 10; //5
// let val2 = null ?? 10; //10
// let val3 = undefined ?? 15; //15
// let val4 = null ?? 10 ?? 20; //10
// let val5 = null ?? null ?? 20 ?? 100; // 20
// console.log(val1,val2,val3,val4,val5);


// ternary operator
const iceTeaprice = 100;
iceTeaprice >= 90 ? console.log("less than") : console.log("more than");



