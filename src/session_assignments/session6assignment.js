//a51 for(initialization;condition;update)
//a52 
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//a53 -- A while loop checks the condition before running the code block. 
//A do-while loop runs the code block atleast once, then checks the condition.

//54 - 
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

//a55 - break exits the loop completetly. continue skips the current iteration and moves to the next one

//a56 - prints even number
for (let i = 1; i <= 20; i++) {

    if (i % 2 == 0) {
        console.log(i);
    }
}

//a57 - false, 0, -0 , empty string, null, undefined ,NaN  ----> Falsy Values

//a58 -- Truthy values are anythin not falsy - 42, 'number', true ,[],{}

//59
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum); //5050

//60 - It will create infinite loop