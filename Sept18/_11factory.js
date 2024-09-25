
class Car{
    constructor(name){
        this.name = name;
        this.accelerationPower = 0;
        this.brakingPower = 0;
        this.speed = 0;
        this.fuel = 30;
    }

    accelerate(currentAccelerate){
        if (this.fuel<=0) {
            console.log("No Sufficient Fuel⚠️⚠️⚠️");
            let howMuch = Number(prompt());
            this.refuelCar(howMuch);
        }
        this.accelerationPower+=currentAccelerate;
        this.brakingPower=0;
        this.fuel-=(10/2)
        this.speed+=currentAccelerate;
        console.log(`Accelerating, Speed is ${this.speed} .. .`)
    }

    brake(currentBrake){
        //mmake sure not go below zero🔴⚠️
        this.accelerationPower=0;
        this.brakingPower+=currentBrake;
        this.speed-=currentBrake;
        console.log(`Brakes applied, speed is ${this.speed}`)
        
    }

    currentSpeed(){
        console.log(`Current Speed is ${this.speed}`);
    }

    refuelCar(howMuch){
        this.fuel+=howMuch;
    }

    drive(pushAccelerate){
        console.log("Starting ..... Sounding .. .Droom Droom.");
        console.log(`Started ... .`);
        this.accelerate(pushAccelerate)

        
    }

}


let carOne = new Car("Activa");
carOne.drive(10)
carOne.accelerate(5)
carOne.accelerate(5)
carOne.accelerate(5)
carOne.accelerate(5)
carOne.accelerate(5)
carOne.accelerate(5)
carOne.brake(10)
carOne.brake(10)
carOne.brake(10)
carOne.brake(10)
carOne.currentSpeed()
console.log(carOne.fuel);
