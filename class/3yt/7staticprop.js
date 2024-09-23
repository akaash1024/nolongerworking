class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());



//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.


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
  console.log(MathHelper.add(10, 5));
  
  // Usage of doubleNumber method
  let helper = new MathHelper(10);
  console.log(helper.doubleNumber()); // 20 (10 * 2)