let person1 = {
    firstName: 'Manish',
    lastName: 'Lalwani',
    age: 37,
    salary: 45,
    company: 'UBS'
}

let person2 = {
    firstName: 'Deepika',
    lastName: 'Dhiria',
    age: 35,
    salary: 15,
    company: 'ANRSource'
}

let person3 = {
    firstName: 'Shourya',
    lastName: 'Lalwani',
    age: 7,
    salary: 0,
    company: 'Student'
}


function printName({ firstName, lastName }) {
    console.log('Name is ' + firstName + ' ' + lastName);
}

function getAge({ age }) {
    console.log('Age  is ' + age);
}

function getCompany({ company }) {
    if (company.trim().toLowerCase() != 'student')
        console.log('Current Organization is ' + company);
    else {
        console.log("He is a Student");
    }
}

function getSalary({ salary }) {
    console.log('CTC is ' + salary);
}

let printDetails = function employeeDetails(person) {
    printName(person);
    getAge(person);
    getCompany(person);
    getSalary(person);
}

printDetails(person1);
printDetails(person2);
printDetails(person3);