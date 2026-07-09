let x = 100;
let y = 200;

let a = 'selenium';
let b = 'playwright';

console.log(x + y);
console.log(a + b);
console.log(x + a);
console.log(a + y);
console.log(x + y + a + b);
console.log(a + b + x + y);
console.log(a + b + (x + y));
console.log(x + y + a + b + x + y);
console.log(1 + "1");
console.log("1" + 1);
console.log(1+1);
console.log("1" + "1");
console.log("---------");
console.log(1 - "1");
console.log("5" - 2);
console.log("5" + 2);
console.log("10" - "4");
console.log("10" + "4");
console.log("hello" - 2);//NaN
console.log(10 - "manish"); //NaN
console.log("----------------");
console.log(10 / "2"); 
console.log("20" / "5");//20/5=4
console.log(20 / "testing"); // NaN
console.log("-------");

console.log(10 * "2");//10*2=20
console.log(10 * "hello");//NaN

//Exponential
console.log(2 ** 3);//2 * 2 * 2 = 8
console.log("2" ** 3); // 2 * 2 * 2 = 8

//Unary Plus (+) : converts to a number

console.log(+"42");
console.log(+"42" + 5);//42 + 5 = 47

let d = "45";
console.log(+d + 10);


// Unary Negative (-) :

console.log(-"42" + 100);//-42+100=58
console.log(-"20" - 130);
 




