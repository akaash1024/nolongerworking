class MathHelper {
    constructor(number) {
      this.number = number;
    }
  
    static add(a, b) { 
      return a + b;
    }
  
    // it double the stored number in the object
    doubleNumber() {
      return this.number * 2;
    }
  }
  
  // Usage of add method
  console.log(MathHelper.add(10, 5)); // you can check here,
  
  // Usage of doubleNumber method
  let helper = new MathHelper(10);
  console.log(helper.doubleNumber()); // 20 (10 * 2)