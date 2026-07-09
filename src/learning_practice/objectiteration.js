let employee = {
    name: 'Manish',
    age: 27,
    salary: 34,
    phone: '343334',
    devices: ["iphone17", "macbook pro", "wifi", "ipad"]
}

// for (let e in employee) {
//     console.log(e);
//     console.log(employee[e]);
// }

let at = Object.keys(employee);
console.log(at);

console.log("------");

console.log(Object.keys(employee));
console.log(Object.keys(employee).length);
console.log(Object.values(employee));
console.log(Object.entries(employee));


let userJson = JSON.stringify(employee, null, 2);
console.log(userJson);


var a = 'a';
var b = 'b';
console.log(a<b);


var str = "You can finds lios in Africa/Asia/India";
console.log(str.includes("//"));

const a = '2';
const b = '2';
console.log(a/b);

var num = 4;
function bar(foo){
    foo += foo;
}
let result = bar(num);
console.log(result);



const foo = {_a:'Rocket',#_a:'Fuel'};
console.log(foo['#_a']);