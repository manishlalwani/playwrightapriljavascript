function testing(callback) {
    console.log('Hello');
    callback()
}

function print() {
    console.log('Hello World');
}

let coding = function doCoding() {
    console.log('Do Coding');
}
//calling testing function by another function
testing(print);

//calling testing function by another function expression

testing(coding);

//calling the testing function by calling anonymous function
testing(function () {
    console.log('I am Anonymous')
});

//calling the function by calling arrow function

testing(() => {
    console.log('Arrow Function');
})




let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let mul = (a, b) => a * b;
let div = (a, b) => a / b;

//Generic Function like calculator


function calculator(callback, a, b) {
    console.log('Doing Calculation.....');
    return callback(a, b);
};

let r1 = calculator(add, 10, 20);
console.log(r1);

let r2 = calculator(sub, 100, 90);
console.log(r2);

let r3 = calculator(mul, 10, 90);
console.log(r3);

let r4 = calculator(div, 100, 10);
console.log(r4);



function printing(callback) {
    console.log('hello printing');
    callback(100, 200);
}

// printing(num => {
//     console.log('hello ', num);
// })

printing((num1, num2) => {
    console.log('hello ', num1 + num2);
})


function finding(callback1, callback2) {
    console.log('Doing Something ......');
    callback1();
    callback2();
}

function coding() {
    console.log('Coding');
}

function writing() {
    console.log('Writing');
}

finding(coding, writing);

///

function click(element) {
    console.log('Click on..', element);
}

function performAction(callbackaction, element) {
    console.log('Do this Action');
    callbackaction(element);
}

performAction(click, 'loginButton');


function getUserDetails(callback, userObj) {
    console.log('getting user details....');
    callback(userObj);
}

getUserDetails((user) => {
    console.log('Name is', user.name);
    console.log('Age is ', user.age);

}, { name: 'Manish', age: 30 })



//Rest API

function get() {
    console.log('GET API');
}

function post() {
    console.log('POST API');
}

function put() {
    console.log('PUT API');
}

function deleteCall() {
    console.log('DELETE API');
}

//user facing function

function performApiCall(callback) {
    callback();
}

performApiCall(get);
performApiCall(post);
performApiCall(put);
performApiCall(deleteCall);