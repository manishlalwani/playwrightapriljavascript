// a31 -- == and === 
// == loose equality check only values if required converts datattype automatically to compare
// === strict equality - checks value and datatype as well

let a = 10;
let b = '10';
console.log(a == b);//true
console.log(a === b);//false

//a32 5=='5' --> true, 5==='5' -->false as explained above

//a33 - NaN - Not a Numnber , example can be undefined
console.log(parseInt('Helloo'));
console.log(0 / 0);
let number = parseInt('Hello');
//a34  - yes we can use
console.log(0 / 0 == NaN);
console.log(isNaN(number));

//a35 - Infinity
console.log(4 / 0);

//a36
console.log(Infinity + 100);//Infinity

//a37 
//i++ --> Post Increment value by 1 means first give the value and then increase by 1
//++i --> Pre Increment value by 1 means first increase the value by 1 and then assign it back
let i = 0;
console.log(i++);//0
console.log(i);//1
console.log(++i);//2
console.log(i);//2

//a38 --
let x = 5;
let y = x++;//5
console.log(x);//6
console.log(y);//5

//a39 Type Coercion - Type Coercion is JavaScript automatically converts to required type 
console.log('5' - 2);//Here string is automatically converted to number

//a40 null==undefined -->false , null===undefined
console.log(null == undefined);//true so they are loosely equal
console.log(null === undefined);//false // different types so false


