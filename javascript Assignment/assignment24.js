function isAdult(age) {
    return age >= 18;
}

function isEven(number) {
    return number % 2 === 0;
}

function calculateTotal(price, quantity) {
    return price * quantity;
}


// Test cases

console.log(isAdult(20));       // true
console.log(isAdult(15));       // false

console.log(isEven(10));        // true
console.log(isEven(7));         // false

console.log(calculateTotal(100, 5)); // 500