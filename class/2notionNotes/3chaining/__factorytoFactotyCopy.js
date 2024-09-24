//+++++++++++++++++++++++++++++++++++++++++From here++++++++++++++++++++++++++++++++++++++\\

//one factory to another factory
//one factory to another factory


function personCreator(firstName, lastName, age) {
    let obj = {};
  
    obj.firstName = firstName;
    obj.lastName = lastName;
    obj.age = age;
  
    return obj;
  }
  
  function employeeCreator(firstName, lastName, age, department, salary) {
    let obj = personCreator(firstName, lastName, age);
  
    // obj.firstName = firstName;
    // obj.lastName = lastName;
    // obj.age = age;
  
    obj.department = department;
    obj.salary = salary;
  
    return obj;
  }
  
  let emp1 = employeeCreator("John", "Wilson", 25, "Sales", 100000);
  console.log(emp1);