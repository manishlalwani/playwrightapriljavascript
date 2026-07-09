let employee = {
    name: "Manish",
    age: 23,
    salary: 45,
    coding() {
        console.log(this.name);
        console.log(this.salary);
    },
    testing() {
        this.coding();
        console.log(employee.age);
    }
}

employee.coding();
employee.testing();


let employee1 = {
    name: "Manish",
    age: 23,
    salary: 45,
    printData(x, y) {
        return x + y;
    },
    data: function () {
        console.log("This is anonymous function ", this.name);

    },
    reading: () => {
        console.log("This is arrow function ");
    }
}

let r1 = employee1.printData(100, 200);
console.log(r1);
employee1.data()
employee1.reading();



let loginPage = {
    username: "#username",
    password: "password",
    lgnButton: "//*[button='lognBtn']",
    doLogin(appuser, apppassword) {
        this.username = appuser;
        console.log("UserName is ", this.username);
        this.password = apppassword;
        console.log("Password is ", this.password);
        console.log("Now Click on LoginButton", this.lgnButton);
    }
}

loginPage.doLogin("Manish", "Passwod");


//Object Destrcturing

let user = {
    name: "Manish",
    age: 23,
    address: {
        flat: 345,
        apartment: "Suncity",
        city: "Minneapolis",
        location: {
            lat: "23232",
            lon: "34443"
        }
    }
}


// let { name, address: { flat, apartment } } = user;
// console.log(name, flat, apartment);

let { name, address: {flat} ,address:{ location:{lat, lon } }} = user;
console.log(name, flat, lon);



