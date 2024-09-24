createIPhone1.prototype.dial = function () {
    console.log("tring.. tring...");
  };
  
  createIPhone1.prototype.sendMessage = function () {
    console.log("Sending message...");
  };
  
  function createIPhone1(ID, color, display, weight) {

    // let obj = {}; // <magic 1>
    // Object.setPrototypeOf(obj, createIPhone1.prototype); // <magic 3>
  
    obj.id = ID;
    obj.color = color;
    obj.display = display;
    obj.weight = weight;
  
    // return obj; // <magic 2>
  }
  
  let i1 = new createIPhone1(1, "red", "128g", 100); //dont forget to add new here.
  console.log(i1);
  i1.dial();
  i1.sendMessage();