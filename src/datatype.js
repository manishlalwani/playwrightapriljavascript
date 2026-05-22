
//data type - type of data

//1. Primitive Data type - Pre defined datatype and size is fixed in memory
//number
//string
//boolean
//BigInt
//Undefined
//null


//2. Non primitive data type - Reference Type Memory is not fixed 
//Array
//Objects
//functions
//map,list,set

//3. identifiers  : var , let, const
//1.number 
//size : 8 bytes - 64 bits
let x = 10;
console.log(x);

//let is identified of variable x

console.log(typeof x);

let y = 12.54;
console.log(y);
console.log(typeof y);

let i = -100;
console.log(i);
console.log(typeof i);

//2.string/characters : collection of characters
//size : for each char 2 bytes

let name = 'Manish';
console.log(name);
console.log(typeof name);

let msg = 'Welcome to NAL';
console.log(msg);
console.log(typeof msg);

let m1 = '$';
console.log(m1);
console.log(typeof m1);

let m2 = '1000'
console.log(m2);
console.log(typeof m2);

let m3 = 1000;
console.log(m3);
console.log(typeof m3);


let test = "i love javascript coding";
console.log(test);
console.log(typeof test);

let p;
console.log(p); //undefined
console.log(typeof p);


//3. boolean - true/false

let flag = true;
console.log(flag);
console.log(typeof flag);

let isElementExist = false;
console.log(isElementExist);
console.log(typeof isElementExist);


//4 . undefined 
//size : 0 bytes

let firstName = undefined;
console.log(firstName);
console.log(typeof firstName);

//null : no values
let obj = null;
console.log(obj);
console.log(typeof obj);// object //existing bug in JS..legacy


//Re-initialization

let c = 10;
c= 20;
console.log(c);
console.log(typeof c);

//var - old js way of declaring the variables
var lastName = 'sharma';
var toolName = 'playwright';
var toolName =  'selenium';
console.log(toolName);

//const - Value can't be changed after initialization
const pi = 3.14;
console.log(pi);
console.log(typeof pi);


const title = 'Login Page';
console.log(title);


//const
//redeclaration : No
//reinitilization : No

//let
//redeclaration : No
//reinitiliazation : yes

//var : not a good practice
//redeclaration : yes
//reinitiliazation : yes


// let test1 = 10;
// console.log(test1);


//Hoisting
console.log(m);
let m = 10;
console.log(m);

//var : allowed hoisting - undefined --no error
//let and const : Not allowed hoisting -- error


