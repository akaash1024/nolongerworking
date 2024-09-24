function IPhone1(color, display) {
    this.color = color;
    this.display = display;
    

    //MUST READ - //STILL not prototype this is only method.

    this.dial = function() {
      console.log("tring.. tring...")
    }
    
    this.sendMessage = function() {
      console.log("Sending message...")
    }
  }
  
  
  let i1 = new IPhone1('Gray','90mm')
  i1.dial(); // "tring.. tring..."
  i1.sendMessage(); // "Sending message..."

  console.log(IPhone1.prototype)