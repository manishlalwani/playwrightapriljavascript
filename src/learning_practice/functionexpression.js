let sum = function addNumbers(x, y) {
    return x + y;
}

let result = sum(200, 300);
console.log(result);

let browser = function launchBrowser(browserName) {
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