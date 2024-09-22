//### Understanding the 3rd Magic of the `new` keyword

//Convert this factory function to constructor function:

createIPhone1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  createIPhone1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  function createIPhone1(ID, color, display, weight) {
    let obj = {}; // <magic 1>
    Object.setPrototypeOf(obj, createIPhone1.prototype); // <magic 3>
  
    obj.id = ID;
    obj.color = color;
    obj.display = display;
    obj.weight = weight;
  
    return obj; // <magic 2>
  }
  
  let i1 = createIPhone1(1, "red", "128g", 100);
  console.log(i1);
  i1.dial();
  i1.sendMessage();



  //toooooooooooooooooo

  IPhone1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  IPhone1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  function IPhone1(ID, color, display, weight) {
    // let obj = {}; this
    // Object.setPrototypeOf(obj, IPhone1.prototype);
  
    this.id = ID;
    this.color = color;
    this.display = display;
    this.weight = weight;
  
    // return obj;
  }
  
  let i1 = new IPhone1(1, "red", "128g", 100);
  console.log(i1);
  i1.dial();
  i1.sendMessage();