class Employee {
    name;
    age;
    salary;
    isActive;

    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    displayEmployeeDetails() {
        console.log('Name is : ', this.name);
        console.log('Age is : ', this.age);
        console.log('Salary is : ', this.salary);
        console.log('Active : ', this.isActive);
    }
}

let e1 = new Employee('Manish', 38, 45, true);
e1.displayEmployeeDetails();

let e2 = new Employee('Dinesh', 35);
e2.displayEmployeeDetails();

let e3 = new Employee('Suresh');
//e3 = null;//this gives error as it is poining to null
e3.displayEmployeeDetails();