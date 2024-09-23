// //in array every ele is value righh,, like, 0:"js", 1:"py"
// const  coding = ["js", "py", "c++", "rb"]

// const values = coding.forEach( (temp) => {
//     console.log(temp);
// })
// console.log((values)); //not returning anything "undefined"

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//arrow function can define ,
// "1. myNums.filter( () => () )",
// "2.myNums.filter( (num) => num>5 ) WHEN its single lines'" SO,

// const nyNewNums = myNums.filter( (num) => num > 4) // /[ 5, 6, 7, 8, 9, 10 ]

const nyNewNums = myNums.filter((num) => {
  return num > 4; //if you forget here return word then it will console only object line.18
}); //whenever we open "{}" then we must have use return theree,
// console.log(nyNewNums);

//// with forEach
const NewNums = [];
myNums.forEach((num) => {
  if (num > 4) {
    NewNums.push(num);
  }
});
// console.log(NewNums);

////////////////////===============================
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

let userBooks = books.filter((bk) => bk.genre === "History");

let userBooks2 = books.filter((bk) => {
  return bk.publish >= 2000 && bk.genre === "History";
});
console.log(userBooks2);


//++++++++++++++
let users = [
  { rank: 1, firstName: "John", lastName: "Doe" },
  { rank: 2, firstName: "Pete", lastName: "Smith" },
  { rank: 3, firstName: "Mary", lastName: "Go" },
];


const topUsers = users.filter( (item) =>{
  return item.rank>=2;
});

console.log(topUsers);

/* 
  { rank: 2, firstName: "Pete", lastName: "Smith" },
  { rank: 3, firstName: "Mary", lastName: "Go" },
*/