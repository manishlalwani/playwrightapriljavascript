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
