let employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with updated key-value pair without mutating the original employee object
    return { ...employee, [key]: value };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Mutate the original employee object and return it
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    // Return a new object without the specified key-value pair without mutating the original employee object
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Mutate the original employee object by deleting the specified key-value pair and return it
    delete employee[key];
    return employee;
  }
    
