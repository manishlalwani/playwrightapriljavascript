function getCricketBat() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('cricket bat found');
        }, 1300)
    })
}

function getCricketBall() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('cricket ball found');
        }, 1200)
    })
}

function getCricketWickets() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('cricket wickets found');
        }, 100)
    })
}

function isCricketGroundReady(rain) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rain) {
                console.log('Cricket Ground Ready');
                resolve(true);
            } else {
                //console.log('Cricket Ground Not Ready');
                reject(false);
            }
        }, 1100)
    })
}

// //First Scenario Where to Check all are positive condtions to play cricket

// console.log('Scenario 1 ----- All Positives');
// try {
//     let [a, b, c, d] = await Promise.all([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(true)]);
//     if (d) {
//         console.log('Play Cricket');
//     }
// } catch (error) {
//     console.log(error);
// }

// //Second Scenario Where to any of them is reject then don't play cricket
// console.log('Scenario 2 ----- Any Rejects');

// try {
//     let [a, b, c, d] = await Promise.all([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(false)]);
//     if (d) {
//         console.log('Resume Playing Cricket');
//     }
// } catch (error) {
//     console.log("Stop Playing Cricket")
// }

//Third Scenario 
// console.log('Scenario 3 ---- With Race with 1 reject')

// let result1 = await Promise.race(([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(false)]));
// console.log(result1);


// //fourth Scenario 
// console.log('Scenario 4 ---- With Race all resolve')

// let result = await Promise.race(([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(true)]));
// console.log(result);

//5th Scenario return status
// let result = await Promise.allSettled(([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(false)]));
// console.log(result);

//6th Scenario - All resolve gives array with result
// let result = await Promise.all(([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(true)]));
// console.log(result);

// try {
//     let result = await Promise.all(([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(false)]));
//     console.log(result);
// } catch (error) {
//     console.log(error);
// }



let result = await Promise.any([getCricketBat(), getCricketBall(), getCricketWickets(), isCricketGroundReady(true)]);
console.log(result);
