
//symmetric array
let num = [
    [1, 2, 3, 4],
    [10, 20, 30, 40],
    [100, 200, 300, 400]
];

for (let i = 0; i <= num.length - 1; i++) {
    for (let j = 0; j <= num[i].length - 1; j++) {
        console.log(num[i][j]);
        
    }

}
console.log("--------------");
//for ...of loop
for (let u of num) {
    for (let v of u) {
        console.log(v);
    }

}
console.log("---------------");
//jagged array
let data = [
    [1, 2, 3, 4, 5],
    [10, 20, 30],
    [100, 200],
    [1000]
]

for (let u of data) {
    for (let v of u) {
        console.log(v);
    }

}

for (let i = 0; i <= data.length - 1; i++) {
    for (let j = 0; j <= data[i].length - 1; j++) {
        console.log(data[i][j]);
    }

}


//
let prod = ['macbook pro', 'imac', 'iphone17', 'canon', 'macbook air'];

//reverse order : using for..of loop

// let count = prod.length - 1;
// for (let e of prod) {
//     e = count;
//     console.log(prod[e]);
//     count--;

// }

let count = prod.length - 1;
for (let key in prod) {
    console.log(prod[count]);
    count--;
}

//console.log(typeof prod);