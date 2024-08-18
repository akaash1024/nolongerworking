/*
singleton
object.create //constructor method through 
*/

//this is >>>>>>>>>>>singleton<<<<<<<<<<<<<<<<<<

// const tinderUser = new Object()
const tinderUser = {} //both are same 

tinderUser.id = "12ahdfdhs"
tinderUser.name = "Akash"

// console.log(tinderUser);



const regularUser = {
    email : "abc@gmail.com",
    fulName: {
        userFullName:{
            firstName:"Akash",
            lastName: "Kevat",
            middleName: "Rambahadur"
        }
    }
}

// console.log(regularUser) gives all details 
// console.log(regularUser.fulName.userFullName.lastName)


const ob1 = {1: "A", 2: "B"}
const ob2 = {3: "A", 4: "B"}
const ob3 = {5: "A", 6: "B"}

// const obMain = Object.assign({}, ob1,ob2,ob3) //you remove this "{}" but using this is good, this is called target and source
// console.log(obMain);

// const obMain = {...ob1,...ob3}
// console.log(obMain);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser)); //giving output in array 
// console.log(Object.entries(tinderUser)); //return individual


// console.log(tinderUser.hasOwnProperty('name'))
// console.log(tinderUser.hasOwnProperty('email'))


const course = {
    courseName : "js in Hindi",
    price: 10000,
    courseInstructor : "Hitesh"
}

// console.log(course.courseInstructor); //boring ?!

const {courseInstructor : instructor} = course

// console.log(courseinstructor); //this is also works
console.log(instructor);


