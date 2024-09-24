function CreateTeaMaker() {
  // this object is created by the new keyword

  let temperature = 75; // default temperature

  let heatWater = function () {
    console.log(`Heating water to ${temperature} degrees Celsius.`);
  };

  let mixIngredients = function () {
    console.log("Steeping the tea.");
  };

  this.makeTea = function () {
    heatWater();
    mixIngredients();
    console.log("Tea is ready!");
  };

  this.setTemperature = function (newTemperature) {
    temperature = newTemperature;
  };

  // this object is imlicity returned because of the new keyword
}

//creating new prototype
CreateTeaMaker.prototype.Akash = function() {
  console.log("tring.. tring...");
};
//now creteTeaMaker has new prototype, aksdh


// Usage
const myTeaMaker = new CreateTeaMaker();
myTeaMaker.setTemperature(80); // set a new temperature
myTeaMaker.makeTea(); // make tea

console.log(myTeaMaker);
console.log(myTeaMaker.heatWater); // undefined
console.log(myTeaMaker.mixIngredients); // undefined
console.log(myTeaMaker.temperature); // undefined
