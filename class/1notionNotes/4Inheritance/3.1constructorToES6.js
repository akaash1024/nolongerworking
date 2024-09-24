class IPhone1 {
  constructor(ID, color, display, weight) {
    this.id = ID;
    this.color = color;
    this.display = display;
    this.weight = weight;
  }

  dial() {
    console.log("tring.. tring...");
  }

  sendMessage() {
    console.log("Sending message...");
  }
}

class IPhone2 extends IPhone1 {
  constructor(ID, color, display, weight, blueTooth, internet) {
    super(ID, color, display, weight);
    this.blueTooth = blueTooth;
    this.internet = internet;
  }

  connectToBluetooth() {
    console.log("Connecting to bluetooth...");
  }

  connectToInternet() {
    console.log("Connecting to internet...");
  }
}

let iphone2Object = new IPhone2(1, "black", "128GB", 1000, "1.0", "2g");

console.log(iphone2Object);
iphone2Object.dial();
iphone2Object.sendMessage();
iphone2Object.connectToBluetooth();
iphone2Object.connectToInternet();
