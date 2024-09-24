createIPhone1.prototype.dial = function () {
  console.log("tring.. tring...");
};

createIPhone1.prototype.sendMessage = function () {
  console.log("Sending message...");
};

function createIPhone1(ID, color, display, weight) {
  

  this.id = ID;
  this.color = color;
  this.display = display;
  this.weight = weight;

  
}

Object.setPrototypeOf(createIPhone2.prototype, createIPhone1.prototype);

createIPhone2.prototype.connectToBluetooth = function () {
  console.log("Connecting to bluetooth...");
};

createIPhone2.prototype.connectToInternet = function () {
  console.log("Connecting to internet...");
};

function createIPhone2(ID, color, display, weight, blueTooth, internet) {
  createIPhone1.call(this,ID, color, display, weight)

  this.blueTooth = blueTooth;
  this.internet = internet;

  
}



//operation
let iphone2Object = new createIPhone2(
  1,
  "black",
  "128GB",
  1000,
  "1.0",
  "2g",
  "1.0 MP"
);

console.log(iphone2Object);
iphone2Object.dial();
iphone2Object.sendMessage();
iphone2Object.connectToBluetooth();
iphone2Object.connectToInternet();