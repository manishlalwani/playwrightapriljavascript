let prod = {
    prodid: 123,
    name: "macbook",
    price: 34555
}

let newProd = { ...prod } ///shallow copy works for level 1

console.log(prod);
console.log("------");
console.log(newProd);
console.log("-------");
newProd.price = 45666;
console.log(prod);
console.log("-----");
console.log(newProd);


let newProdDeep = structuredClone(prod);
console.log(prod);
console.log("------");
console.log(newProdDeep);
console.log("-------");
newProdDeep.price = 42666;
console.log(prod);
console.log("-----");
console.log(newProdDeep);



let user = {
    userid: 123,
    name: "Manish",
    salary: 34555,
    address: {
        flat: 101,
        building: "new building",
        city: "Pune"
    }
}

// let userShallow = { ...user };

// console.log(user);
// console.log("------");
// console.log(userShallow);
// console.log("-------");
// userShallow.address.city = "Bangalore";
// console.log(user);
// console.log("-----");
// console.log(userShallow);


let userSDeep = structuredClone(user);
console.log(user);
console.log("------");
console.log(userSDeep);
console.log("-------");
userSDeep.address.city = "Bangalore";
console.log(user);
console.log("-----");
console.log(userSDeep);
