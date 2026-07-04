//Series of Steps to DO
//Start Coffee Machine
//Boil Water
// Add Coffee Powder
// Pour Coffee in Cup
// Serve Coffee

function startCoffeeMachine(callback) {
    setTimeout(() => {
        console.log('1. Coffee Machine Started.........');
        callback();
    }, 5000);
}

function boilWater(callback) {
    setTimeout(() => {
        console.log('2. Water is Boiled..........');
        callback();

    }, 4000);

}

function addCoffeePowder(callback) {
    setTimeout(() => {
        console.log('3. Coffee Powder Added........');
        callback();
    }, 3000);

}

function pourCoffeeMug(callback) {
    setTimeout(() => {
        console.log('4. Pour Coffeee in Mug.......');
        callback();
    }, 2000);

}

function serveCoffeeToCustomer(callback) {
    setTimeout(() => {
        console.log('5. Coffee Served to Customer..........');
        callback();
    }, 1000);

}


//start the coffee machine
//callback hell - pyramid of doom
startCoffeeMachine(() => {
    boilWater(() => {
        addCoffeePowder(() => {
            pourCoffeeMug(() => {
                serveCoffeeToCustomer(() => {
                    console.log('Your Coffee is ready...');
                })
            })
        })
    })
})


