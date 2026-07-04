

//check if above are anagrams
function getMap(input) {
    let map = new Map();
    for (let ch of input) {
        map.set(ch, (map.get(ch) ?? 0) + 1);
    }
    //console.log(map);
    return map;
}

function compareAnagrams(string1, string2) {

    if (!string1 || !string2) return false;

    let str1 = string1.trim();
    let str2 = string2.trim();

    if (str1.length == 0 || str2.length === 0) return false;
    if (str1.length !== str2.length) return false;

    let freq1 = getMap(string1);
    let freq2 = getMap(string2);
    if (freq1.size != freq2.size) return false;

    for (let [key, val] of freq1) {
        if (freq2.get(key) !== val) return false;
    }
    return true;
}



console.log(compareAnagrams('sillent', 'listenl'));


