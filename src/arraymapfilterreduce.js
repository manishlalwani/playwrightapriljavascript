console.log("****** 14.map ***********");

let num1 = [1, 2, 3, 4, 5];
let numArray = num1.map((e) => e * 2);
console.log(numArray);
let square = num1.map(e => e * e);
console.log(square);

let empNames1 = ['manish', 'rahul', 'ravin', 'tom', 'harry'];
let upNames = empNames1.map(e => e.toUpperCase());
console.log(upNames);


console.log("****** 15.filter ***********");
//remove from the existing array
let num2 = [1, 2, 3, 4, 5];
let even = num2.filter(e => e % 2 === 0);
console.log(even);


let num3 = [10, 20, 30, 40, 45, 50];
let greaterthan30 = num3.filter(e => e > 30);
console.log(greaterthan30);
console.log(typeof greaterthan30);


let empNames = ['manish', 'rahul', 'ravin', 'tom', 'harry', "om"];
let empLengthGrt3 = empNames.filter(e => e.length > 3);
console.log(empLengthGrt3);


let items = ['apple iph', 'samsung galaxy', 'apple mac', 'apple ipad', 'dell'];
let appleItems = items.filter(e => e.startsWith('apple'))
    .filter(e => e.includes('iph'))
    .map(e => e.replace('iph', 'iphone'));
console.log(appleItems);

console.log("****** 16.reduce ***********");

let num = [1, 2, 3, 4, 5];
let numTotal = num.reduce((sum, e) => sum = sum + e, 0);
console.log(numTotal);

let items1 = ['apple iph', 'samsung galaxy', 'apple mac', 'apple ipad', 'dell'];
let finalValue = items1.reduce((result, e) => result + e);
console.log(finalValue);