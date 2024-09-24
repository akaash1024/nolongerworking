function IPhone1(color, display) {
  this.color = color;
  this.display = display;
}

// Defining methods on the prototype - NOW Iphone1 have prototype
IPhone1.prototype.dial = function() {
  console.log("tring.. tring...");
};

IPhone1.prototype.sendMessage = function() {
  console.log("Sending message...");
};

let i1 = new IPhone1('Gray', '90mm');
// i1.dial(); // "tring.. tring..."
// i1.sendMessage(); // "Sending message..."

console.log(IPhone1.prototype) 




