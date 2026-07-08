
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
let nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter(e => e % 2 == 0);
console.log(nums3);


//Q7. Find how many students passed (passing marks >= 40).
let marks = [45, 78, 32, 89, 56, 90, 22].filter(e => e >= 40);
console.log(marks.length);


//Q8. Calculate the average of the array.
const nums2 = [10, 20, 30, 40, 50];
let sum1 = nums2.reduce((sum, a) => sum + a, 0);
console.log(sum1 / nums2.length);

//Q9. Reverse the array WITHOUT mutating the original.
const arr = [1, 2, 3, 4, 5];
let rev = arr.toReversed()
console.log(rev);

//Q10. Get only words with length greater than 3.
const words = ['cat', 'elephant', 'dog', 'tiger', 'rat'];
let wordsGreaterThan3 = words.filter(e => e.length > 3);
console.log(wordsGreaterThan3);


//Q11. Remove duplicates from the array.
const nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const non_dup = [...new Set(nums)];
console.log(non_dup);

//Q12. Count how many words are in the sentence.
const sentence = 'I love automation testing';
console.log(sentence.split(/\s+/).length);

//Q13. Find the product of all numbers (1 x 2 x 3 x 4 x 5).
const nums = [1, 2, 3, 4, 5];
let product = nums.reduce((prev, num) => (prev * num), 1)
console.log(product);

//Q14. Find the sum of only odd numbers.
const nums = [10, 25, 30, 45, 50, 65];
let Oddsum = nums.filter(num => num % 2 != 0)
    .reduce((sum, num) => sum + num, 0);
console.log(Oddsum);

//Q15. Find the second largest number.
const nums = [12, 45, 78, 23, 89, 6, 34]
    .toSorted((a, b) => b - a)[1];
console.log(nums);

//Q16. Reverse the string using array methods.
const str = 'naveen';
console.log(str.split('').reverse().join(''));

//Q17. Flatten this array completely.
const arr = [1, [2, 3], [4, [5, 6]]];
const newArr = arr.flat(Infinity);
console.log(newArr);

//Q18. Get only the numbers divisible by both 5 and 2.
const nums = [5, 10, 15, 20, 25, 30].filter(n => (n % 5 == 0 && e % 2 == 0));
console.log(nums);

//Q19. Find the sum of squares of even numbers using chaining.
const sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => n * n)
    .filter(n => n % 2 == 0)
    .reduce((sum, n) => sum + n, 0)
console.log(sum);


//Q20. Count how many times 'apple' appears.
const fruits = ['apple', 'banana', 'mango', 'apple', 'banana', 'apple'];
const count = fruits.filter(fruit => fruit.includes('apple')).length;
console.log(count);

//Q21. In a single chain - filter numbers greater than 3, double them, and return their sum.
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = nums.filter(num => num > 3)
    .map(num => 2 * num)
    .reduce((sum, num) => num + sum, 0);
console.log(sum);