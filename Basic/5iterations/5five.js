const  coding = ["js", "py", "c++", "rb"]

///////////////////////
function printMe(temp){
    // console.log(temp);
}
coding.forEach(printMe) //if you want give callback-function here then you have to remove name. So, give parameter as reference
//////////////////////


// coding.forEach(function functionName(){}) this the way to write, right?! 

// but here, forEach taking parameter as callbackfunction that simple meaning is no need ":function name"


//so, anonymous way to call callback function
coding.forEach(function (i){  //simple way, write coding.forEach(fuction functionName(){}) then delete fuctionName because it is callbackfn "NEXTLINE comment"
    // console.log(i);        //take "i, val, ele" what you want open the curly-brackets
})
// using Arrow fn
coding.forEach((i) => {       //simple way, write coding.forEach( () => {}) then, take "i, val, ele" what you want open the curly-brackets
    // console.log(i);
})


const newArr = ["js", "py", "c++", "rb"] //as forEach taking upto three parameters
newArr.forEach((items,index,array) => {
    // console.log(items,index,array);
})
//////////////////////

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]
//Here you can think like, arr=[{},{},{}]
myCoding.forEach((items) => {
    console.log(items.languageFileName);
})














//////////////////////from GPT to understand callback


// const numbers = [1, 2, 3, 4, 5];

// // yeh callback function hai jo har number ko print karega
function printNumber(temp) {
    console.log(temp);
}

// // `forEach` mein callback function ka use
numbers.forEach(printNumber);

    // Is example mein:

    // printNumber ek callback function hai.
    // forEach() method array ke har element pe iterate karta hai aur har element ke liye printNumber function ko call karta hai.

// Agar aap chaho toh callback function ko directly forEach() ke andar anonymous function ke roop mein define kar sakte ho:

numbers.forEach(function(temp) {
    console.log(temp);
});
    // Toh, simple shabdon mein, callback function ek aisa function hota hai jo doosre function ke andar pass kiya jaata hai, 
    // aur jab jaroorat hoti hai toh usse call kiya jaata hai, khaas kar loop ya iteration ke dauran.