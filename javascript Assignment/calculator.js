let first = Number(prompt("Enter first number"));
let operator = prompt("Enter operator (+, -, *, /)");
let second = Number(prompt("Enter second number"));

let result;

if (operator === "+") {
    result = first + second;
}
else if (operator === "-") {
    result = first - second;
}
else if (operator === "*") {
    result = first * second;
}
else if (operator === "/") {
    result = first / second;
}
else {
    result = "Invalid operator";
}

alert("Result: " + result);