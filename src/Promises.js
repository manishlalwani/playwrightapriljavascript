

//1. Pending
//2. resolve - fullfillmen - return the resource(data)
//3. reject  - reason(error reason)

//create a new promise
let pizzaPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve('Pizza Delivered.......')
    }
    else {
        reject('Payment Failed.........');
    }
});


pizzaPromise
    .then((result) => console.log(result))
    .catch((error) => console.log('Printing the error ', error))
    .finally(() => console.log('close the app'));


function getUserInfoDetails(empId) {

    return new Promise((resolve, reject) => {
        console.log('Fetch Employee Details....');

        setTimeout(() => {
            if (empId <= 0) {
                reject('Negative Emp Is Entered')
            }
            else {
                let emp = {
                    id: empId,
                    name: 'Manish',
                    age: 37
                };
                resolve(emp);
            }
        }, 5000)
    }
    )
}
getUserInfoDetails(-1).then((result) => console.log(result))
    .catch((reason) => console.log(reason));




function elementToClick(element) {
    return new Promise((resolve, reject) => {
        console.log('Element Needs to be clicked');

        setTimeout(() => {
            if (element.length <= 0) {
                reject('Locator is not correct');
            }
            else {
                resolve('Locator is Correct and element is clicked');
            }
        }, 5000);
    })
}

elementToClick('').then((result) => console.log(result))
    .catch((reason) => console.log(reason));


