
//Q1 - 
const greenPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, JavaScript!')
    }, 2000)
});

greenPromise.then(value => console.log(value));

//Q2

const errorPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong!')
    }, 1000)
});

errorPromise.catch(error => console.log(error));

//Q3

const p = new Promise((resolve, reject) => {
    console.log('A');
    resolve('B');
    console.log('C');
    reject("D")
});

p.then(value => console.log(value))
    .catch(e => console.log(e));

console.log("E");

//A , B,E


//Q4
function checkNumber(n) {
    return new Promise((resolve, reject) => {
        if (n > 0) {
            resolve('Positive');
        }
        else if (n == 0) {
            resolve('Zero')
        } else {
            reject('Negative')
        }
    }
    );
}

checkNumber(5).then(result => console.log(result))
                        .catch(error => console.log(error));

checkNumber(0).then(result => console.log(result))
                        .catch(error => console.log(error));

checkNumber(-3).then(result => console.log(result))
                        .catch(error => console.log(error));


