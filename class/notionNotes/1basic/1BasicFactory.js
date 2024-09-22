

function iPhone1(ASIN, color, display, camera) {
    let obj = {};
    
    obj.color = color;
    obj.display = display;
    
    //MUST READ//both dial and sendmessage are function (method) here not prototype but called "Method" in obj

    obj.dial = function() {                           //Here
      console.log("tring.. tring...")
    }
    
    obj.sendMessage = function() {                    //Here
      console.log("Sending message...")
    }
    
    return obj;
  }
  
  
  let i1 = iPhone1('Gray','90mm')
  i1.dial(); // "tring.. tring..."
  i1.sendMessage(); // "Sending message..."

  console.log(iPhone1.prototype) //must run and check, getting empty object because not prototype add yet.