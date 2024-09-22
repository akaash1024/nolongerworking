
// //factory
// function iPhone1(ASIN, color, display, camera) {
//     let obj = {};
    
//     obj.color = color;
//     obj.display = display;
    
//     obj.dial = function() {
//       console.log("tring.. tring...")
//     }
    
//     obj.sendMessage = function() {
//       console.log("Sending message...")
//     }
    
//     return obj;
//   }
   
//   let i1 = iPhone1('Gray','90mm')
//   i1.dial(); // "tring.. tring..."
//   i1.sendMessage(); // "Sending message..."


//+++++++++++++++++++++++++



// //constructor func
// function IPhone1(color, display) {
//     this.color = color;
//     this.display = display;
    
//     this.dial = function() {
//       console.log("tring.. tring...")
//     }
    
//     this.sendMessage = function() {
//       console.log("Sending message...")
//     }
//   }
  
  
//   let i1 = new IPhone1('Gray','90mm')
//   i1.dial(); // "tring.. tring..."
//   i1.sendMessage(); // "Sending message..."


//+++++++++++++++++++++++++




// //ES6 Classes
// class IPhone1 {
//     constructor(ASIN, color, display, camera) {
//       this.color = color;
//       this.display = display;
//     }
    
//     dial() {
//       console.log("tring.. tring...");
//     };
  
//     sendMessage() {
//       console.log("Sending message...");
//     };
//   }
  
//   let i1 = new IPhone1("Gray", "90mm");
//   i1.dial(); // "tring.. tring..."
//   i1.sendMessage(); // "Sending message..."