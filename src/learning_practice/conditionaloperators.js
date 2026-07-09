console.log(10 === 10);
console.log(10 >= 5);
console.log(true === true);

let age = 10;

if (age >= 16) {
    console.log("You are eligible for Voting");
} else {
    console.log("You are not eligible for Voting");
}

if (true) {
    console.log("Hello Manish");
} else {//Dead Code// Unreachable
    console.log("Bye");
}


let browser = 'chrome';

if (browser === 'chrome') {
    console.log("Launch Chrome");
}
if (browser === 'firefox') {
    console.log("Launch Firefox");
}
if (browser === 'edge') {
    console.log("Launch edge");
}
if (browser === 'safari') {
    console.log("Launch safari");
}
else {
    console.log("Please Pass the right browser");
}