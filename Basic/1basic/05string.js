const name = "Akash"
const repoCount = 10

console.log(`Hello my name is ${name} and I have around ${repoCount} in git server`)


const gameName = new String('Akash-Kevat')


console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('z')); //-1 represents not exit


const newString = gameName.substring(0,7)
console.log(newString) // cant give negetive value to start or end.



const url = "akash.kevat";
console.log(url.replace('kevat','Nishad'))




const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


console.log(gameName);
console.log(gameName.split('-'));