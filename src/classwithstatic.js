export class Employee {


    static company = 'Google';

    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }

    coding() {
        console.log('Employee is Coding');
    }

    reading() {
        console.log('Employee is Reading');
    }

    static billing() {
        console.log('Employee billing');
    }
}

// let e1 = new Employee('Manish', 38, 46, true);
// console.log(Employee.company);
// Employee.billing();
// Employee.company = 'IBM';
// console.log(Employee.company);
