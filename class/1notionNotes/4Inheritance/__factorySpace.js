//separate method to prototype and optimizing space.
//now where dial, sendMessge are attached with every new object with properties now its separate and handle by internal JS object.

IPhone1.prototype.dial = function () {
  console.log("tring.. tring...");
};

IPhone1.prototype.sendMessage = function () {
  console.log("Sending message...");
};

IPhone1.prototype.testingAkash = ()=>{
    alert("Test Done")
}

function IPhone1(ID, color, display, weight) {
  let obj = {};
  Object.setPrototypeOf(obj, IPhone1.prototype);

  obj.id = ID;
  obj.color = color;
  obj.display = display;
  obj.weight = weight;

  return obj;
}

let i1 = new IPhone1(1, "black", "128GB", 1000);
let i2 = new IPhone1(2, "red", "128GB", 1000);
let i3 = new IPhone1(3, "green", "128GB", 1000);
let i4 = new IPhone1(4, "blue", "128GB", 1000);
let i5 = new IPhone1(5, "gray", "128GB", 1000);

i1.dial();
i1.sendMessage();
console.log(i1);

// i1.testingAkash() //appearing alert in browsers' console.
