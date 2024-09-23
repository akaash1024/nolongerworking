function Introduce(greeting) {
  let greet = greeting;
  let name = this.name;
  let age = this.age;

  console.log(`${greet}! I am ${name} & I am ${age} years old.`);
}

Introduce.call({ name: "Vivek", age: 40 }, "Hello");
// Hello! I am Vivek & I am 40 years old.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

function eat() {
  console.log(`${this.animalType} is eating!`);
}

// invoke the function in a way that the console output is
// "cat is eating!"
eat.call({ animalType: "cat" });

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

//here https://www.canva.com/design/DAGRTHgPh5Y/X6q3_b6nwGmSzVlm9tikOw/view?utm_content=DAGRTHgPh5Y&utm_campaign=designshare&utm_medium=link&utm_source=editor

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

let thisObjOfEmployee = {
    department: "Sales",
    salary: 100000,
  };
  
  // console.log(thisObjOfEmployee);
  
  function Person(obj) {
    obj.firstName = "John";
    obj.lastName = "Johnson";
    obj.age = 25;
  }
  
  // Person(thisObjOfEmployee);
  
  // console.log(thisObjOfEmployee);


  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++\\

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  function Employee(firstName, lastName, age, department, salary) {
    let Person = (this,firstName,lastName,age);
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  
    this.department = department;
    this.salary = salary;
  }
  
  let emp1 = new Employee("John", "Wilson", 25, "Sales", 100000);
  console.log(emp1);
  

  //same

  function IPhone1(ID, color, display, weight) {
    this.id = ID;
    this.color = color;
    this.display = display;
    this.weight = weight;
  }
  
  function IPhone2(ID, color, display, weight, blueTooth, internet, camera) {
    // Id like id, color, display and weight to be added to thisOfIphone2 from thisOfIphone1
    let Iphone1 = (this,ID, color, display, weight)
    
    this.id = ID;
    this.color = color;
    this.display = display;
    this.weight = weight;
  
    this.blueTooth = blueTooth;
    this.internet = internet;
    this.camera = camera;
  }
  
  let ip2Obj = new IPhone2(1, "black", "128GB", 1000, "1.0", "2g", "1.0 MP");
  
  console.log(ip2Obj);
  