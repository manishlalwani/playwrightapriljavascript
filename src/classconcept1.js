class User {

    constructor(name, age, salary, isActive) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.isActive = isActive;
    }
}

let u1 = new User('Manish', 38, 45, true);
console.log(u1.name, u1.age, u1.salary, u1.isActive);


class Person {
    constructor() {
        console.log("This is default constructor");
    }
}

let p1 = new Person();