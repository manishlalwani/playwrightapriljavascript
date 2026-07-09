

/**
 * Verifies if a given string is a palindrome.
 * The verification is case-insensitive and ignores all non-alphanumeric characters.
 *
 * @param {string} input - The string to be checked.
 * @returns {boolean} - Returns true if the input is a palindrome, false otherwise.
 */

function verifyIsPalindrome(input) {
    if (typeof input !== 'string') return false;

    let cleanStr = normalizeString(input);
    if (cleanStr.length <= 1) return true;

    let start = 0;
    let end = cleanStr.length - 1;

    while (start < end) {
        if (cleanStr[start] != cleanStr[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;


}

/**
 * Normalizes a string by removing non-alphanumeric characters and converting to lowercase.
 * * @param {string} str - The raw input string.
 * @returns {string} - The cleaned string.
 */
function normalizeString(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

/**
 * Simple test helper to validate the function
 */
function test(input, expected) {
    const result = verifyIsPalindrome(input);
    const status = result === expected ? "✅ PASS" : "❌ FAIL";
    console.log(`${status} | Input: "${input}" | Expected: ${expected} | Result: ${result}`);
}

// Test cases
test('madam', true);
test('racecar', true);
test('abba', true);
test('', true);
test('a', true);
test('race car', true);       // Space handling
test('A man, a plan, a canal: Panama', true); // Punctuation/Case handling
test('hello', false);         // Negative case