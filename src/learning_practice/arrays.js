//Arrays is collection of data
//data - similar data - Homogeneous
// diff type data - Heterogeneous



// let num = [1, 2, 3, 4, 5] // Length - 5, Range - 0 to 4
// console.log(num.length);
// let len = num.length;
// console.log("Highest Index", len - 1);
// console.log("Lowest Index", 0);
// console.log(num[0]);
// console.log(num[4]);
// console.log(num[5]);
// console.log(num);

// num[0] = 10;
// console.log(num);

// num[4] = 50;
// console.log(num);

// let num = [1, 2, 3, 4, 5]
// num[10] = 100;
// console.log(num);
// console.log(num[5]);


// let marks = [10, 20, 20, 40];
// console.log(marks);
// marks[-1] = 5;
// console.log(marks);
// marks[-100] = 20
// console.log(marks);
// console.log(marks[5]);
// console.log(marks.length);
// console.log(marks[-1]);
// //key : value
// console.log(marks);


// let products = ['macbook', 'windows', 'linux', 'unix', 'asus']
// console.log(products.length);
// console.log(typeof products);

//employee data

// let empData = ['Manish', 38, 45.4, true];
// console.log(empData[0]);
// console.log(empData.length);

let number = [10, 20, 30, 40];
number[-1] = 50;
console.log(number);

// while (i < number.length) {
//     console.log(number[i]);
//     i++;
// }
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
}

for (let i = number.length - 1; i >= 0; i--) {
    console.log(number[i]);
}