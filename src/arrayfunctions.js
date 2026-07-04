let num = [1, 2, 3, 4, 5];

console.log("******  1.Push  ***********");
let e1 = num.push(6);
console.log(e1);
console.log(num);


console.log("******  2.Pop ***********");
num.pop();
console.log(num);


console.log("****** 3.Shift ***********");
num.shift();
console.log(num);

console.log("****** 4.Unshift ***********");

let e2 = num.unshift(9);
console.log(e2);
console.log(num);

console.log("****** 5.Slice ***********");

let items = ["mac", "windows", "asus", "iphone"];
let newItems = items.slice(1, 3);
console.log(items);
console.log(newItems);

let itemsSlice = ["mac", "windows", "asus", "iphone"];
let newitemsSlice = itemsSlice.slice(0);
console.log(itemsSlice);
console.log(newitemsSlice);

let itemsSlice1 = ["mac", "windows", "asus", "iphone"];
let newitemsSlice1 = itemsSlice1.slice(2);
console.log(itemsSlice1);
console.log(newitemsSlice1);

let itemsSlice3 = ["mac", "windows", "asus", "iphone"];
let newitemsSlice3 = itemsSlice3.slice(-2);
console.log(itemsSlice3);
console.log(newitemsSlice3);

let itemsSlice2 = ["mac", "windows", "asus", "iphone"];
let newitemsSlice2 = itemsSlice2.slice(-1);
console.log(itemsSlice2);
console.log(newitemsSlice2);

let itemsSlice4 = ["mac", "windows", "asus", "iphone", "macbook"];
let newitemsSlice4 = itemsSlice4.slice(-4);
console.log(itemsSlice4);
console.log(newitemsSlice4);

console.log("****** 6.Splice***********");
//add, remove, replace
//splice(start,deletecount,items)
let itemCart = ["mac", "windows", "asus", "iphone"];
console.log(itemCart);
itemCart.splice(0, 0, 'ipod');// Add Item at the Beginning
console.log(itemCart);

let itemCartNew = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew);
itemCartNew.splice(0, 0, 'ipod', 'iwatch'); // Add Item at the Beginning
console.log(itemCartNew);

let itemCartNew1 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew1);
itemCartNew1.splice(0, 1, 'ipod'); // Replace Item at the Beginning
console.log(itemCartNew1);

let itemCartNew2 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew2);
itemCartNew2.splice(0, 2, 'ipod'); // Replace 2 Item at the Beginning and 1 item placed
console.log(itemCartNew2);

let itemCartNew3 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew3);
itemCartNew3.splice(0, 0); // No Change
console.log(itemCartNew3);

let itemCartNew4 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew4);
itemCartNew4.splice(2, 1, 'iwatch'); // replace 3rd element
console.log(itemCartNew4);

let itemCartNew5 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew5);
itemCartNew5.splice(0, itemCartNew5.length, 'iwatch'); // replace 3rd element
console.log(itemCartNew5);


let itemCartNew6 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew6);
itemCartNew6.splice(itemCartNew6.length, 1, 'iwatch'); // 
console.log(itemCartNew6);

let itemCartNew7 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew7);
itemCartNew7.splice(itemCartNew7.length - 1, 1, 'iwatch'); // 
console.log(itemCartNew7);

let itemCartNew8 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew8);
itemCartNew8.splice(itemCartNew8.length - 2, 2, 'iwatch', 'earphone'); // 
console.log(itemCartNew8);

let itemCartNew9 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew9);
itemCartNew9.splice(2, 0, 'iwatch', 'earphone'); // 
console.log(itemCartNew9);


console.log("****** 7.Reverse***********");
let itemCartNew10 = ["mac", "windows", "asus", "iphone"];
console.log(itemCartNew10);
itemCartNew10.reverse();
console.log(itemCartNew10);

console.log("****** 8.Index of***********");
let index = ["mac", "windows", "asus", "iphone"];
let k = index.indexOf("windows");
console.log(k);


let index1 = ["mac", "windows", "asus", "iphone", "asus", "linux", "unix", "asus"];
let first = index1.indexOf("asus");
console.log(first);
let second = index1.indexOf("asus", first + 1);
console.log(second);

let third = index1.indexOf("asus", second + 1);
console.log(third);


console.log("****** 9.Includes ***********");

let num = [1,2,3,4,5];
console.log(num.includes(2));
console.log(num.includes(6));

console.log("****** 10.Join ***********");
//join all the elements as string
let arr = ['Manish', 'Kumar', 'Lalwani'];
let newArray = arr.join('-');
console.log(newArray);

let arr = ['Manish', 'Kumar', 'Lalwani'];
let newArray = arr.join(' ');
console.log(newArray);

console.log("****** 11.toString ***********");

let arr = ['Manish', 'Kumar', 'Lalwani'];
let newArray = arr.toString();
console.log(newArray);


console.log("****** 12.at ***********");

let arr = ['Manish', 'Kumar', 'Lalwani'];
console.log(arr.at(1));
console.log(arr.at(-1));
console.log(arr.at(-5)); // undefined
console.log(arr.at[-1]); ///undefined

console.log("****** 13.forEach ***********");

let index = ["mac", "windows", "asus", "iphone"];
index.forEach(e1 => {
    console.log(e1);
});
index.forEach(e1 => {
    console.log(e1.toUpperCase());
});

let num = [1,2,3,4,5];
num.forEach(e => console.log(e*2));