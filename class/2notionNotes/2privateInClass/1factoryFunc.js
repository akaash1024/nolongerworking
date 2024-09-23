function createTeaMaker() {
    let obj = {};
  
    let temperature = 75; // default temperature
  
    let heatWater = function () {
      console.log(`Heating water to ${temperature} degrees Celsius.`);
    };
  
    let mixIngredients = function () {
      console.log("Steeping the tea.");
    };
  
    obj.makeTea = function () {
      heatWater();
      mixIngredients();
      console.log("Tea is ready!");
    };
  
    obj.setTemperature = function (newTemperature) {
      temperature = newTemperature;
    };
  
    return obj;
  }
  
  // Usage
  const myTeaMaker = createTeaMaker();
  myTeaMaker.setTemperature(80); // set a new temperature
  myTeaMaker.makeTea(); // make tea
  
  console.log(myTeaMaker);
  console.log(myTeaMaker.heatWater); // undefined
  console.log(myTeaMaker.mixIngredients); // undefined
  console.log(myTeaMaker.temperature); // undefined
  