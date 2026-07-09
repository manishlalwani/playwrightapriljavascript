

function capitalizeString(input) {
    if (!input == null) {
        return 'String cannot be null';
    }
    if (input.trim().length === 0) {
        return 'String cannot be empty';
    }
    let words = input.split("\s+");
    let newString = "";
    for (let word of words) {
        newString = newString + " " + word.charAt(0).toUpperCase() + word.substring(1, word.length);
    }

    return newString.trim();
}

function capitalizeStringWithMap(input) {
    if (input == null) {
        return 'String cannot be null';
    }
    const inputTrimmed = input.trim();
    if (!inputTrimmed) {
        return 'String cannot be empty';
    }
    const words = inputTrimmed.split(/\s+/);
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

//console.log(capitalizeString('hello world'));
console.log(capitalizeStringWithMap('hello world'));
console.log(capitalizeStringWithMap('hello      world'));
console.log(capitalizeStringWithMap('hello'));
console.log(capitalizeStringWithMap('h'));
console.log(capitalizeStringWithMap(''));
console.log(capitalizeStringWithMap(null));


