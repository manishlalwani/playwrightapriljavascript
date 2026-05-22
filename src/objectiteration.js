let employee = {
    name: 'Manish',
    age: 27,
    salary: 34,
    phone: '343334',
    devices: ["iphone17", "macbook pro", "wifi", "ipad"]
}

for (let e in employee) {
    console.log(e);
    console.log(employee[e]);
}

console.log("------");

console.log(Object.keys(employee));
console.log(Object.keys(employee).length);
console.log(Object.values(employee));
console.log(Object.entries(employee));


let userJson = JSON.stringify(employee, null, 2);
console.log(userJson);
