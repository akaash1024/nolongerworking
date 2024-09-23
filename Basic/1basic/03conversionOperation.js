let score = 33 
let score1 = "33 "
// console.log(typeof score);
// console.log(typeof (score1));


// let score2=Number(score1)
// console.log(typeof score2)

/*
"33" : 33
33abc : NaN
true : 1
false : 0

*/


// let isLogin = ""

// let booleanIsLogin = Boolean(isLogin)
// console.log(booleanIsLogin)


/*
1 : true, 0: false
"": false
" ": true
"akash": true //means not empty
*/



// ***************Operations***************//

// let value = 3;
// let negValue = -value
// console.log(negValue);


// let xx = "1" + 2;
// console.log(xx,typeof xx);  //string

// let aa = 1 + "2";
// console.log(aa,typeof aa); //string

// let aaa = "1" + 2 + 2;
// console.log(aaa,typeof aaa); //string

// let aas = 1 + 2 + "2";
// console.log(aas,typeof aas); //string




// console.log(+true) //1
// console.log(+"")   //0


// let counter = 100;

// ++counter //101
// console.log(counter) //101

// counter++
// console.log(counter)

/*
Prefix increment

let x = 3;
const y = ++x;

    x is 4; 
    y is 4
*/

/*
Postfix increment

let x = 3;
const y = x++;

 x is 4; 
 y is 3
*/



// `let temp="16px" //must start from number 
// y=parseInt(temp)
// console.log(y);
// console.log(typeof y);

// let temp1="xxx16px"
// z=parseInt(temp1)
// console.log(z);
// console.log(typeof z);
// `



// `
// let x="500";
// y=Number(x)
// z=(+x)
// console.log(y);
// console.log(z);

// // --------
// let vivekAge="10";
// let vivekNextYearAge= +vivekAge+1;
// console.log(vivekNextYearAge);

// console.log(false == 0);         //true
// console.log(null == undefined); //true
// `

console.log(typeof 42);
console.log(typeof "Hello World");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof function (){});

console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

let x=[1,2,3,4,5];
console.log(Array.isArray(x));

let y = {name:"Akash"}
if((typeof y==="object") && (y!==null) && !Array.isArray(y)){
    console.log("I am sure that this is object");
    
}



