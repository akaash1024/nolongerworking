/*
createPerson
│
├── firstName
├── lastName
├── age
├── increaseAge() // increases this.age by 1
└── eat() // console logs "eating..."

     ↑
     │ (Inheritance)
     │

createEmployee
│
├── salary
├── work() // console.log "working"
└── increaseSalary(amt) // increases this.salary by amt

properties are usually set per instance but
methods should added to the prototype for efficient sharing across instances.
*/

createPerson.prototype.increaseAge = function () {
  this.age++;
  console.log("increasing age...");
};

createPerson.prototype.eat = function () {
  console.log("eating...");
};

function createPerson(firstName, lastName, age) {
  let obj = {};
  Object.setPrototypeOf(obj, createPerson.prototype);

  obj.firstName = firstName;
  obj.lastName = lastName;
  obj.age = age;

  return obj;
}

Object.setPrototypeOf(createEmployee.prototype, createPerson.prototype);

createEmployee.prototype.work = function () {
  console.log("working");
};

createEmployee.prototype.increaseSalary = function (amt) {
  this.salary += amt;
  console.log("increasing salary...");
};

function createEmployee(firstName, lastName, age, salary) {
  let obj = createPerson(firstName, lastName, age);
  Object.setPrototypeOf(obj, createEmployee.prototype);
  obj.salary = salary;
  return obj;
}

let e1 = createEmployee("Vivek", "Agarwal", 40, 100);
e1.eat();
e1.increaseAge();
e1.work();
e1.increaseSalary(50);
console.log(e1);
