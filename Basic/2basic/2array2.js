const marvelHeros = ["Iron-man","Spideman","Thor"]
const dcHeros = ["Batman","Superman","Flash"]

// marvelHeros.push(dcHeros) // push actual to the exit array 
// console.log(marvelHeros);

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros);

//++++++concat
// const allHero = marvelHeros.concat(dcHeros) //where concat returns new array
// console.log(allHero);

//++++++spread
// const all_hero = [...dcHeros,...marvelHeros] //spreading each elements.
// console.log(all_hero)


//++++++flat
// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// let real_another_arr = another_arr.flat(Infinity) //you can give depth like, above arr total 3 arr. but prevent count you can use infinity
// console.log(real_another_arr)


// console.log(Array.isArray("Akash"));
// console.log(Array.from("Akash"));
console.log(Array.from({name: "Akash"})); //INTERESTING if not sure create object then returns only empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


//++++++ rest 
function addNumbers(a, b, ...rest) {
    console.log(a);       // 1
    console.log(b);       // 2
    console.log(rest);    // [3, 4, 5]
  }
  
  addNumbers(1, 2, 3, 4, 5);

  
//++++++ spread
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];

console.log(newNumbers);  // [1, 2, 3, 4, 5]
