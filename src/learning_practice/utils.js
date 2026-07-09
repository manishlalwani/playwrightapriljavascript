const PI = 3.14;


function driving() {
    console.log("Driver is driving");
}

function printing() {
    console.log("Printing");
}

// export default function coding() {
//     console.log("Coding");
// }

let username = "Manish";
export default username;

//export default username = "Manish";
export { PI, driving, printing };
