let defaultSettings = {
    theme: "light",
    language: "English",
    notifications: true
};

let userSettings = {
    theme: "dark",
    language: "Hindi"
};

let finalSettings = {
    ...defaultSettings,
    ...userSettings
};

console.log(finalSettings);


// Calculate total

function calculateTotal(items) {

    let total = 0;

    for (let item of items) {
        total += item.price * item.quantity;
    }

    return total;
}

let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },
    {
        name: "Mouse",
        price: 500,
        quantity: 2
    }
];

console.log("Total:", calculateTotal(cart));