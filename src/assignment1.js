// // let i = 11;
// // i = i++ + i++;

// // console.log(i);//11+12=23

// let a = 11;
// let b = 22;
// let c;
// c = a + b + a++ + b++ + ++a + ++b;
// //  11+ 22 + 11 + 22 + 13 + 24 = 66+13 =79 + 24 = 103
// // .         a=12, b=23, a = 13,b = 24

// console.log('a=' + a); // 13
// console.log('b=' + b); // 24
// console.log('c=' + c); // 103

// let i = 0;
// let j = i++ - --i + ++i - i--;
// // .     0  -  0  + 1 - 1
// // .    i=1 , 0 , 1, 0
// console.log(i);//0
// console.log(j);//0


// let d = true;
// d++;
// console.log(d);//2

// let i=1,j=2, k=3;
// let m = i-- - j-- - k--;
// // .    1  - 2 - 3
// // .   i=0, j =1,k = 2 
// console.log("i="+i);//0
// console.log("j="+j);//1
// console.log("k="+k);//2
// console.log("m="+m);//-4

// let a=1, b=2; 
// console.log(--b - ++a + ++b - --a);
///          1 - 2 + 2 - 1//0

// let i=19, j=29, k=9;
// let m = i-- - j-- - k--;
// // .    19 - 29 - 9
// // .   i=18, j=28, k = 8
// console.log("i="+i); //18
// console.log("j="+j); // 28
// console.log("k="+k); //8

// let i = 11;
// let j = --(i++);  
//     invalid left prefix operation    


// let m = 0, n = 0;
// let p = --m * --n * n-- * m--;
// // .     -1 * -1 * -1 * -1
// console.log(p);//1

// let a=1;
// a = a++ + ++a * --a - a--; 
// //  1 + 3 * 2 - 2
// // . a= 2, 3 , 2, 1
// console.log(a);//5

// let a = 11++;
// console.log(a); // error because we can't add inc/dec to number


let d = 1.5, D = 2.5;
console.log(d++ + ++D);
// 1.5 + 3.5 = 5