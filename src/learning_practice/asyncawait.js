function getUserDetails(userId) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (userId < 0) {
                reject('Userid is Negative Number');
            }
            else {
                let userObj = {
                    name: 'manish',
                    userid: userId
                };
                resolve(userObj);
            }
        }, 5000);
    }
    );
}


getUserDetails(100).then(userObj => console.log(userObj));



async function getEmployeeDetails(empId) {
    let empObj = {
        empName: 'Manish',
        employeeId: empId
    }
    return empObj;
}

let userObj = await getEmployeeDetails(100)
console.log(userObj);

function getEmployeeDetails(empId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let empObj = {
                empName: 'Manish',
                employeeId: empId
            }
            resolve(empObj)
        }, 5000);
    });
}

getEmployeeDetails(100).then(result => console.log(result));
console.log(userObj);




//Series of Steps to DO
//Start Coffee Machine
//Boil Water
// Add Coffee Powder
// Pour Coffee in Cup
// Serve Coffee

async function startCoffeeMachine() {
    return new Promise((resolve) => {

        setTimeout(() => {
            console.log('1. Coffee Machine Started.........');
            resolve(true);
        }, 5000);
    })
}

async function boilWater() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('2. Water is Boiled..........');
            resolve();
        }, 4000);
    })


}

async function addCoffeePowder() {

    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('3. Coffee Powder Added........');
            resolve();
        }, 3000);
    })


}

async function pourCoffeeMug() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('4. Pour Coffeee in Mug.......');
            resolve();
        }, 2000);
    })


}

async function serveCoffeeToCustomer() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('5. Coffee Served to Customer..........');
            resolve();
        }, 1000);
    })

}

async function coffeeOrderDelivered() {

    try {
        let machineStart = await startCoffeeMachine();
        console.log(machineStart);
        await boilWater();
        await addCoffeePowder();
        await pourCoffeeMug();
        await serveCoffeeToCustomer();
        console.log('Your Coffee is ready');
    } catch (error) {
        console.log(error);
    }
    finally {
        console.log('Close the machine');
    }
}

await coffeeOrderDelivered();


async function getNumber() {
    return 100;
}

let t1 = getNumber();
console.log(t1);
let t2 = await getNumber();
console.log(t2);


async function print() {
    console.log('hello print function');
}

print();



async function clickElement(element) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Clicking On element ', element);
            resolve(true);
        }, 3000)
    });
};

async function hoverElement(element) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log('Hovering over element ', element);
            resolve(false);
        }, 3000);
    })

};

async function interactWithElement(element) {
    let flag = await hoverElement(element);
    if (flag) {
        await clickElement(element);
    }
    else {
        console.log('Element is Not Present');
    }


};

interactWithElement('#clickableLink');