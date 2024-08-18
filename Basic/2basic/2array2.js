const marvelHeros = ["Iron-man","Spideman","Thor"]
const dcHeros = ["Batman","Superman","Flash"]

// marvelHeros.push(dcHeros) // push actual to the exit array 
// console.log(marvelHeros);

// marvelHeros.concat(dcHeros)
// console.log(marvelHeros);

// const allHero = marvelHeros.concat(dcHeros) //where concat returns new array
// console.log(allHero);

// const all_hero = [...dcHeros,...marvelHeros]
// console.log(all_hero)


// const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// let real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr)


// console.log(Array.isArray("Akash"));
// console.log(Array.from("Akash"));
console.log(Array.from({name: "Akash"})); //if not sure then returns only empty array


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
