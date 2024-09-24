class TeaMaker {
    #unit;
    #temperature = 75; // private field for temperature
  
    constructor(unit) {
      this.#unit = unit;
    }
  
    #heatWater() {
      console.log(`Heating water to ${this.#temperature} degrees ${this.#unit}.`);
    }
  
    #mixIngredients() {
      console.log("Steeping the tea.");
    }
  
    makeTea() {
      this.#heatWater();
      this.#mixIngredients();
      console.log("Tea is ready!");
    }
  
    setTemperature(newTemperature) {
      this.#temperature = newTemperature;
    }
  }

  let baTea = new TeaMaker(500) //sets units
  baTea.setTemperature(30)

  //run in console in browserr
  console.log(baTea) //500,30
  console.log(TeaMaker.prototype)