import { Employee } from "./classwithstatic.js";

let e1 = new Employee('User1', 34, 45, true);
console.log(Employee.company);
e1.coding();
e1.reading();
console.log(e1.name);