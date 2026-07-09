//1. Simple functions - void with zero parameter

function testPrint() {
    console.log("Print the test");
}

testPrint();


//2. Return function with zero parameters and return type number

function getNumber() {
    console.log("Get the Number");
    return 100;
}

console.log(getNumber());
let result = getNumber();
console.log(result);

//3. some input and return something

function add(x, y) {
    console.log("Add 2 Numbers...");
    let z = x + y;
    return z;
}

let m1 = add(10, 20);
console.log(m1);


//WAF to launch browser
//if browser is either chrome,firefox,edge,safari
//launch broewser
//return true and come out
//if browsername is not from above then inform user about wrng browser name
//return false



function launch(browserName) {
    console.log("Launching Browser.....");
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch Chrome browser.....');
            return true;
        case 'firefox':
            console.log('Launch firefox browser.....');
            return true;
        case 'safari':
            console.log('Launch safari browser.....');
            return true;
        case 'edge':
            console.log('Launch edge browser.....');
            return true;
        default:
            console.log('Invalid Browser.....' + browserName);
            return false;
    }
}

let isBrowserLaunched = launch('.....FIREfox...');
console.log(isBrowserLaunched);

if (isBrowserLaunched) {
    console.log("Enter url https://www.google.chome");
}


function getTotalExecutionTime() {
    let startTime = new Date();
    console.log(startTime.getTime());
    for (let i = 0; i <= 500; i++) {
        console.log(i);
    }
    let endTime = new Date();
    console.log(endTime.getTime());
    console.log(endTime - startTime);
}
getTotalExecutionTime();

//sorting techniques
//Bubble Sorrt

function bubbleSortArray(arr) {
    let startTime = new Date();

    for (let i = 0; i < arr.length; i++) {
        let swapped = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (!swapped) {
            break;
        }
    }
    let endTime = new Date();
    let totalTime = endTime - startTime;

    console.log(totalTime.toPrecision(4));
    return arr;

}

//selection sort
function selectionSortArray(arr) {
    let startTime = new Date();
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    let endTime = new Date();
    let totalTime = endTime - startTime;

    console.log(totalTime.toPrecision(4));
    return arr;
}
let unsortedArray = [14, 9, 46, 47, 35]

console.log(selectionSortArray(unsortedArray));
console.log(bubbleSortArray(unsortedArray));






/**
 * This function is to add 2 variables
 * @param {number} x 
 * @param {number} y 
 * @returns it returns additon of numbers
 */
function addNumbers(x, y) {
    return x + y;
}

let t1 = addNumbers(80, 10);
console.log(t1);

let t2 = addNumbers('hello', 'manish');
console.log(t2);

/**
 * 
 * @param {string} browserName 
 * @returns 
 */
function launchBrowser(browserName) {
    console.log("Launching Browser.....");
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('Launch Chrome browser.....');
            return true;
        case 'firefox':
            console.log('Launch firefox browser.....');
            return true;
        case 'safari':
            console.log('Launch safari browser.....');
            return true;
        case 'edge':
            console.log('Launch edge browser.....');
            return true;
        default:
            console.log('Invalid Browser.....' + browserName);
            return false;
    }
}

let isBrowserLaunched2 = launchBrowser('.....FIREfox...');
console.log(isBrowserLaunched2);

if (isBrowserLaunched2) {
    console.log("Enter url https://www.google.chome");
}


//function name --> addValues
//params - 2 - x and y
function addValues(x, y) {
    return x + y;
}

addValues(100, 200);// call by values/arguments


//default parameter

function greet(name = 'manish') {
    console.log('hello ' + name);
}
greet()
greet('Shourya')