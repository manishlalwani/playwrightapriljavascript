
//Q1 - Find the Sum of all nums of array

let num = [10, 20, 30, 40, 50];
let sum = num.reduce((res, a) => res + a, 0);
console.log(sum);

//Q2 - Add 'grape' to the end and 'orange' to the beginning , print the final array

let fruits = ['apple', 'banana', 'mango'];
fruits.push('grape');
fruits.unshift('orange');
console.log(fruits);

//Q3. Create a new array with each number squared.
let nums = [1, 2, 3, 4, 5];
let numSquared = nums.map(e => e * e);
console.log(numSquared);

// Q4 - Convert all names to upper case
let name = ['naveen', 'sonu', 'priya'];
name = name.map(e => e.toUpperCase())
console.log(name);

// Q5 - Find the largest number using Math.max
let numb = [5, 10, 15, 20, 25];
let max_num = Math.max(...numb)
console.log(max_num);


//Q6 Filter only even numbers
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(e => e % 2 == 0);
console.log(nums);


//Q7. Find how many students passed (passing marks >= 40).
let marks = [45, 78, 32, 89, 56, 90, 22].filter(e => e >= 40);
console.log(marks.length);


//Q8. Calculate the average of the array.
const nums = [10, 20, 30, 40, 50];
let sum = nums.reduce((sum, a) => sum + a, 0);
console.log(sum / nums.length);

//Q9. Reverse the array WITHOUT mutating the original.
const arr = [1, 2, 3, 4, 5];
let rev = arr.toReversed()
console.log(rev);

//Q10. Get only words with length greater than 3.
const words = ['cat', 'elephant', 'dog', 'tiger', 'rat'];
let wordsGreaterThan3 = words.filter(e => e.length>3);
console.log(wordsGreaterThan3);
