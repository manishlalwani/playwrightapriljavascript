//a11 - let ,var, const
//a12 - let - Reassignable, const - Not Reassignable
//a13 - Error will be displayed in console -TypeError: Assignment to constant variable.
const a = 10;
a = 20;

//a14 Hoisting  - assigning value after defining it
var userName;
console.log(userName);
userName = "Manish";
console.log(userName);

//a15 -  error will come  - Cannot access 'bet' before

console.log(bet);
let bet = 20;

//a16 - number, string, boolean , bigint, unndefined, null, symbol

//a17 - null is empty type -object , value is missing/NaN - undefined , type - undefined

//a18 - typeof for - 42->number, 'hello'->string, true -> boolean, null - object, undefined -> undefined
console.log(typeof 42);
console.log(typeof 'hello');
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);

//a19 - range of number type - below , precesion lost after add 2
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
let max = Number.MAX_SAFE_INTEGER;
console.log(max+1);//   Lost precison
console.log(max+2);

let overflow = Number.MAX_SAFE_INTEGER * 2;
console.log(overflow);

//but multiplication gives answer need to check why

//a20 - 
let x = 20;
const y = 30;
var z = 40
console.log(x);
console.log(y);
console.log(z);

