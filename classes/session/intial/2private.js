

//private - using factory
// function createTeaMaker() {
//     let obj = {};
  
//     let temperature = 75; // default temperature
  
//     let heatWater = function () {
//       console.log(`Heating water to ${temperature} degrees Celsius.`);
//     };
  
//     let mixIngredients = function () {
//       console.log("Steeping the tea.");
//     };
  
//     obj.makeTea = function () {
//       heatWater();
//       mixIngredients();
//       console.log("Tea is ready!");
//     };
  
//     obj.setTemperature = function (newTemperature) {
//       temperature = newTemperature;
//     };
  
//     return obj;
//   }
  
//   // Usage
//   const myTeaMaker = createTeaMaker();
//   myTeaMaker.setTemperature(80); // set a new temperature
//   myTeaMaker.makeTea(); // make tea
  
//   console.log(myTeaMaker);
//   console.log(myTeaMaker.heatWater); // undefined
//   console.log(myTeaMaker.mixIngredients); // undefined
//   console.log(myTeaMaker.temperature); // undefined
  


//+++++++++++++++++++++++++++++++++++++++++++


// //private - using constructor 
// function CreateTeaMaker() {
//     // this object is created by the new keyword
  
//     let temperature = 75; // default temperature
  
//     let heatWater = function () {
//       console.log(`Heating water to ${temperature} degrees Celsius.`);
//     };
  
//     let mixIngredients = function () {
//       console.log("Steeping the tea.");
//     };
  
//     this.makeTea = function () {
//       heatWater();
//       mixIngredients();
//       console.log("Tea is ready!");
//     };
  
//     this.setTemperature = function (newTemperature) {
//       temperature = newTemperature;
//     };
  
//     // this object is imlicity returned because of the new keyword
//   }
  
//   // Usage
//   const myTeaMaker = new CreateTeaMaker();
//   myTeaMaker.setTemperature(80); // set a new temperature
//   myTeaMaker.makeTea(); // make tea
  
//   console.log(myTeaMaker);
//   console.log(myTeaMaker.heatWater); // undefined
//   console.log(myTeaMaker.mixIngredients); // undefined
//   console.log(myTeaMaker.temperature); // undefined


//+++++++++++++++++++++++++++++++++++++++++++

//ES6 Classes example
// class TeaMaker {
//     #unit;
//     #temperature = 75; // private field for temperature
  
//     constructor(unit) {
//       this.#unit = unit;
//     }
  
//     #heatWater() {
//       console.log(`Heating water to ${this.#temperature} degrees ${this.#unit}.`);
//     }
  
//     #mixIngredients() {
//       console.log("Steeping the tea.");
//     }
  
//     makeTea() {
//       this.#heatWater();
//       this.#mixIngredients();
//       console.log("Tea is ready!");
//     }
  
//     setTemperature(newTemperature) {
//       this.#temperature = newTemperature;
//     }
//   }