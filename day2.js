'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */

function isVowel(letter){
    return letter === "a" ||
        letter === "e" || 
        letter === "i" || 
        letter === "o" || 
        letter === "u"
}
function printLetter(x){
    console.log(x)
}
function vowelsAndConsonants(s) {
    var vowels = [];
    var consonants = [];
    
    for (var letter of s) {
        if (isVowel(letter)){
            vowels.push(letter)
        } else {
            consonants.push(letter)
        }
    }
    for (var vowel of vowels){
        console.log(vowel)
    }
    
    for (var consonant of consonants){
        console.log(consonant)
    }
}


/* 
ANOTHER WAY TO DO THIS FOR LOOP USING TERNARY OPERATORS AND FOREACH 
ternary operators take 3 operands 
- a condition followed by a (?)
- an expression to execute if condition is truthy followed by (:)
- an expression to execute if condition is falsy
*/

/* for (var letter of s){
    isVowel(letter)
    ? vowels.push(letter)
    : consonants.push(letter)
}

vowels.forEach(printLetter)

consonants.forEach(printLetter)
 */