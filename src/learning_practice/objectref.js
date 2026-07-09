let u1 = {
    name: "Manish",
    age: "38"
}

let u2 = {
    name: "Ana",
    age: "36"
}

let u3 = {
    name: "Naveen",
    age: "35"
}

let u4 = {
    name: "Tom",
    age: "25"
}

// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);

// u1 = u2;
// console.log("After u1=u2");
// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);

// u2 = u3;
// console.log("After u2=u3");
// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);

// u3 = u4;
// console.log("After u3=u4");
// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);

// u4 = u1;
// console.log("After u3=u4");
// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);


// u1 = u2 = u3 = u4;
// console.log(u1);
// console.log(u2);
// console.log(u3);
// console.log(u4);


let x = {
    name: 'tom'
}

x = null;

let s1 = {
    product: "macbook"
}

let s2 = {
    price: 45000
}

let s3 = {
    size: "15 Inch"
}

let s4 = { ...s1, ...s2, ...s3 }

console.log(s4);


let e1 = {
    product: "macbook"
}

let e2 = {
    product: "Iphone"
}

let e3 = {
    product: "Ipad"
}

let e4 = { ...e1, ...e2, ...e3 }
console.log(e4);

