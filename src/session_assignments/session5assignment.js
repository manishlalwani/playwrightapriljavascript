//a41 - 
if (a > b) {
    console.log("Print 1");
} else {
    console.log("Print b");
}

//a42 -- else if should be used when we have multiple conditions to check and also it
//will execute whenvever if statement retuns false

//a43
let num = 0;
if (num > 0) {
    console.log("Positive Number");
} else if (num < 0) {
    console.log("Negative Number");
} else {
    console.log("Number is Zero");
}

//a44 Ternary operator is basically if else statement in 1 line

let marks = 30;
let result = marks > 40 ? 'pass' : 'fail'
console.log(result);

//a45 
let browser = 'firefox';
switch (browser) {
    case 'chrome':
        console.log("Launch chrome browser");
        break;
    case 'firefox':
        console.log("Launch firefox browser");

    case 'safari':
        console.log("Launce Safari browser");
        break;

    default:
        console.log("No Browser Selected");
        break;
}

//a46  number prints days
let day = 7;
switch (day) {
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    case 7:
        console.log("Today is Sunday");
        break;

    // default:
    //     console.log("Wrong number entered, please enter number from 1 to 7");
    //     break;
}


// a47 - default is when any case not matches so default executes as per above it is
//not mandatory to user default

//a48 - We can set breakpoint using debugger

/*a49  - if else - when conditions are less to check we should use if else
also when comparison operators are required then we should use if else

When we have exact value to check then switch is better option
*/

//a50 Ternary Operator program

let personAge = 18;
let eligibility = personAge >= 18 ? 'Eligible' : 'Not Eligible';
console.log(eligibility);