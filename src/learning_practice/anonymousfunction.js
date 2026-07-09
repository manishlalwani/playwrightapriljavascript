let addNumber = function (x, y) {
    return x + y;
}
let res = addNumber(300, 400);
console.log(res);

let browser = function (browserName) {
    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log("Launch Chrome Browser");
            return true;
        case 'firefox':
            console.log("Launch firefox Browser");
            return true;
        case 'edge':
            console.log("Launch Edge Browser");
            return true;
        default:
            console.log("Launch Chrome Browser");
            return false;
    }
}

let flag = browser('firefox ')
console.log(flag);
console.log(browser.name);