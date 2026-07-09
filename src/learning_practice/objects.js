let add = {
    name: 'Manish',
    age: 27,
    salary: 34,
    phone: '343334'
}

console.log(add.name);
console.log(add.age);
console.log(add['age']);
add.city = "Pune";
console.log(add);

delete add.salary
console.log(add);


let customer = {
    name: 'Manish',
    age: 23,
    phone: '45454453544',
    salary: 45,
    isActive: true,
    address: {
        flat: 'B1-203',
        building: 'Tirupati Kashiganga 1',
        city: 'Pune',
        zip: 411015
    }
};

console.log(customer.name);
console.log(customer.age);
console.log(customer.address);
console.log(customer.address.flat);
console.log(customer['salary']);
console.log(customer['address']['city']);



console.log("------------------");

let user = {
    name: 'Manish',
    age: 27,
    salary: 34,
    phone: '343334'
}
console.log(user);
//javascript object to JSON
//serialization//Marshelling
let userJson = JSON.stringify(user);
console.log(userJson);

console.log(typeof userJson);
console.log("-----------------");
//Deserialization//Unmarshelling

let userObj = JSON.parse(userJson);
console.log(userObj);
console.log(typeof userObj);

console.log(user.name === userObj.name);
console.log(user === userObj);


console.log("-----------");

let employee = {
    name: 'Manish',
    age: 27,
    salary: 34,
    phone: '343334',
    devices: ["iphone17", "macbook pro", "wifi", "ipad"]
}
console.log(employee);
let empJson = JSON.stringify(employee);
console.log(empJson);
console.log(employee.devices);
console.log(employee.devices.length);
console.log(employee.devices[2]);


// const userDetails = {
//     name: 'Manish',
//     age: 27
// }

// userDetails = {
//     salary: 34
// }

// console.log(userDetails);

