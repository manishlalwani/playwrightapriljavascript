/**
 * Prime Number - When a number is divisible by itself and 1 then that number is prime
 * To Check this I would first get the 
 */



/**
 * 
 * @param {*} num - This is input to to verify if this number is prime or not
 * @returns {boolen} - If Number is Prime then return true else false
 */
function isPrimeNumber(num) {

    //Handling edge case where if number is less than 1 or negative then it is not prime number
    if (num <= 1) return false;
    //2 is Prime Numbers
    if (num == 2) return true;
    //In this step i am excluding all even numbers
    if (num % 2 == 0) return false;

    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;

}

// console.log(isPrimeNumber(3));
// console.log(isPrimeNumber(2));
// console.log(isPrimeNumber(131));
// console.log(isPrimeNumber(7));
// console.log(isPrimeNumber(1));
// console.log(isPrimeNumber(-1));
console.log(isPrimeNumber(9));
console.log(isPrimeNumber(12));