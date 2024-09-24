createIPhone1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  createIPhone1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  function createIPhone1(ID, color, display, weight) {
    let obj = {};
    Object.setPrototypeOf(obj, createIPhone1.prototype);
  
    obj.id = ID;
    obj.color = color;
    obj.display = display;
    obj.weight = weight;
  
    return obj;
  }
  


  createIPhone2.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  createIPhone2.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  createIPhone2.prototype.connectToBluetooth = function () {
    console.log("Connecting to bluetooth...");
  };
  
  createIPhone2.prototype.connectToInternet = function () {
    console.log("Connecting to internet...");
  };
  
  function createIPhone2(ID, color, display, weight, blueTooth, internet) {
    let obj = {};
    Object.setPrototypeOf(obj, createIPhone2.prototype);
  
    obj.id = ID;
    obj.color = color;
    obj.display = display;
    obj.weight = weight;
    obj.blueTooth = blueTooth;
    obj.internet = internet;
  
    return obj;
  }
  


  //Operation
  
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