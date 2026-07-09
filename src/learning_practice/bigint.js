console.log(Number.MAX_SAFE_INTEGER);
//9007199254740991
//2^53-1

let num1 = 100n;
console.log(typeof num1);
console.log(num1);

let num2 = BigInt(2000);
console.log(typeof num2);
console.log(num2);

//console.log(num1 + 10);
console.log(num1 + 10n);

let phone  = "9770300803";
//SSN , Aadhar Card, CC ,Debit , Fax
//string

let ssn = "35353535353543";
let cc = "1234 4566 2345 5432";
let tel = "+101 (2342-54-3434)"
console.log(cc.length);
console.log(phone.length);
console.log(tel.length);