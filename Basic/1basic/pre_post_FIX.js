// `
// let x=10;
// console.log(x+1)                   //11
// console.log("after x+1",x)         //10
// console.log(x+=1)                  //11
// console.log("after x+=1",x)        //11
// `


`
let a=3;
let b=5;
let c=7;
let d=9;

//post inrecrement
console.log(a++) //3 [what is here do part and what is here return part]
console.log(a) //4  do:return ?

console.log(++b) //6
console.log(b)   //6

console.log(c--) //7
console.log(c)   //6

console.log(--d) //8
console.log(d)   //8

`

function postIncrement(x){
    let oldValueX=x;
    //do:
    x=x+1; //x+=1
    //return
    return oldValueX;
}
let temm=5;
console.log(postIncrement(temm));
console.log(temm);





