
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


//Q5
function double(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n * 2);
        }, 500)
    });
}
double(1).then(result => double(result))
    .then(result => double(result))
    .then(result => double(result))
    .then(result => console.log(result))

//double(1).then(e => e).double(e).then(e1 => e1).double(e1).then(e2 => e2).double(e2).then(e3 => console.log(e3));



//Q6
function orderPizza(hasBeans) {
    return new Promise((resolve, reject) => {
        if (hasBeans) {
            resolve("Pizza Delivered")
        } else {
            reject("Out of Beans");
        }
    });
}

orderPizza(true).then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Order Completed"));

orderPizza(false).then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log("Order Completed"));



//Q7
function fetchUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 1) {
                const obj = {
                    id: id,
                    name: 'User' + id,
                    email: 'user' + id + '@test.com'
                }
                resolve(obj)
            }
            else {
                reject('Invalid user ID')
            }
        }, 1000)
    });
}

fetchUser(101).then(result => console.log(result));
fetchUser(-1).catch(error => console.log(error));

//Q8

function getUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const obj = {
                id: id,
                name: `User${id}`,
            }
            resolve(obj)
        }, 1000)
    });
}

function getPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['PostA', 'PostB'])
        }, 1000)
    });
}

function getComments(post) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(['Comment1', 'Comment2'])
        }, 1000)
    });
}

//Nested Promises
getUser(1)
    .then(result => {
        console.log('User: ', result);

        return getPosts(result.name)
            .then(result => {
                console.log('Posts: ', result)
                return getComments(result).then(result => console.log('Comments: ', result))
            })
    })

//Suggested by Chat GPT
let posts;

getUser(1)
    .then(user => {
        console.log('User: ', user);
        return getPosts(user.name)
    })
    .then(postsList => {
        posts = postsList;
        console.log('Posts: ', posts);
        return getComments(posts[0]) //comments on first post
    })
    .then(comments => {
        console.log('Comments: ', comments);
    })
    .catch(error => console.log(error));


//Q9 -
function getWeather() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Sunny, 28°C')
        }, 2000)
    });
}
function getNews() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Top Headlines...')
        }, 3000)
    });
}
function getStocks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('NIFTY: 24500')
        }, 1000)
    });
}

Promise.all([getWeather(), getNews(), getStocks()]).then(result => console.log(result));


//Q10

function slowAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('API Data')
        }, 5000)
    });
}

function timeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Request times out')
        }, ms)
    });
}

Promise.race([slowAPI(), timeout(2000)]).then(result => console.log(result))
    .catch(result => console.log(result));

Promise.race([slowAPI(), timeout(6000)]).then(result => console.log(result))
    .catch(result => console.log(result));



//Q11

function step1(callback) {
    setTimeout(() => callback("result-1"), 1000);
}

function step2(prev, callback) {
    setTimeout(() => callback(prev + " + result-2"), 1000);
}

function step3(prev, callback) {
    setTimeout(() => callback(prev + " + result-3"), 1000);
}

step1((r1) => {
    step2(r1, (r2) => {
        step3(r2, (r3) => {
            console.log(r3);
        });
    });
});


function step1(call) {
    return new Promise((resolve) => {
        setTimeout(() => {
            if (call)
                resolve('result-1')
        }, 1000)
    })
}

function step2(call) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('result-2')
        }, 1000)
    })
}

function step3(call) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('result-3')
        }, 1000)
    })
}


step1(true)
    .then(result1 => {
        return step2(result1).then(result2 => ({
            result1,
            result2
        }));
    })
    .then(({ result1, result2 }) => {
        return step3(result2).then(result3 => {
            console.log(`${result1} + ${result2} + ${result3}`);
        });
    });

