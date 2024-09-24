class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);


//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.
//from notion notes.

class Person {
    #salary;
  
    constructor(name) {
      this.name = name;
      this.#salary = 5000;
    }
  
    get salary() {
      // authenticate and return salary
      return this.#salary;
    }
  
    set salary(amount) {
      // perform initial checks before setting the salary
      this.#salary = amount;
    }
  }
  
  const john = new Person("John");
  console.log(john.salary);
  john.salary = 7000;
  console.log(john.salary);

  