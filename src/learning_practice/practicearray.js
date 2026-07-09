//Level 1 - Easy
//Find the sum of all numbers
const nums = [10, 20, 30, 40, 50];
let result = nums.reduce((sum,num) => num + sum, 0);
console.log(result);