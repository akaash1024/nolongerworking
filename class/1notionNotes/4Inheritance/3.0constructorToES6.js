IPhone1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  IPhone1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  function IPhone1(ID, color, display, weight) {
    // thisOfIphone1
    this.id = ID;
    this.color = color;
    this.display = display;
    this.weight = weight;
  }
  
  Object.setPrototypeOf(IPhone2.prototype, IPhone1.prototype);
  
  IPhone2.prototype.connectToBluetooth = function () {
    console.log("Connecting to bluetooth...");
  };
  
  IPhone2.prototype.connectToInternet = function () {
    console.log("Connecting to internet...");
  };
  
  function IPhone2(ID, color, display, weight, blueTooth, internet) {
    // thisOfIphone2
    IPhone1.call(this, ID, color, display, weight);
    this.blueTooth = blueTooth;
    this.internet = internet;
  }
  
  let iphone2Object = new IPhone2(
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
  