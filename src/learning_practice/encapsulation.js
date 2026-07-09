class Employee {
    name;  // public variable
    age;  //public variable
    #salary;  //private variable
    role; //public variable

    constructor(name, age, salary, role) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.#salary = salary;
    }

    getSalary() {
        return this.#salary;
    }

    setSalary(salary) {
        this.#salary = salary;
    }

    printDetails() {
        console.log('Name of employee is', this.name);
        console.log('Age of employee is', this.age);
        console.log('Salary of employee is ', this.#salary);
        console.log('Role of employee is ', this.role);
    }


}

let e1 = new Employee('Manish', 37, 45, 'Automation QA');
e1.printDetails();
e1.age = 39;
e1.name = 'Manish Lalwani';
e1.role = 'Automation QA Lead';
e1.salary = 49;   /// Output is still showing 45 as value did not get updated
//Using setter to set salary for private variable as it is not accessible outside class
e1.setSalary(49);
console.log(e1.getSalary());

console.log("After Updates of 2 Year");
e1.printDetails();