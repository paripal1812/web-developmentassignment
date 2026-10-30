function validateUser(name, age, email) {

    if (!name) {
        return "Name is required";
    }

    if (age < 18) {
        return "User must be 18 or older";
    }

    if (!email) {
        return "Email is required";
    }

    return "User is valid";
}


console.log(validateUser("Pari", 19, "pari@gmail.com"));
console.log(validateUser("", 19, "pari@gmail.com"));
console.log(validateUser("Pari", 16, "pari@gmail.com"));