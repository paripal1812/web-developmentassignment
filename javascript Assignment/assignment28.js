// 1. Find largest number

let numbers = [10, 50, 20, 90, 40];

let largest = numbers[0];

for (let number of numbers) {

    if (number > largest) {
        largest = number;
    }
}

console.log("Largest:", largest);


// 2. Reverse array

let arr = [1, 2, 3, 4, 5];

console.log(arr.reverse());


// 3. Count vowels

let text = "javascript";

let count = 0;

for (let char of text) {

    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log("Vowels:", count);


// 4. Reverse string

let word = "hello";

let reversed = word.split("").reverse().join("");

console.log(reversed);


// 5. Check palindrome

let str = "madam";

let reverse = str.split("").reverse().join("");

if (str === reverse) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}