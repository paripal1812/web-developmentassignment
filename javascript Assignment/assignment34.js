let catalogue = {
    products: [
        {
            id: 1,
            name: "Laptop",
            category: "Electronics",
            price: 55000
        },
        {
            id: 2,
            name: "Phone",
            category: "Electronics",
            price: 25000
        },
        {
            id: 3,
            name: "Shoes",
            category: "Fashion",
            price: 2000
        }
    ]
};


// Get all products

function getProducts() {
    return catalogue.products;
}


// Find product by ID

function findProduct(id) {

    return catalogue.products.find(function(product) {
        return product.id === id;
    });
}


// Filter by category

function filterByCategory(category) {

    return catalogue.products.filter(function(product) {
        return product.category === category;
    });
}


// Calculate total price

function calculateTotal() {

    return catalogue.products.reduce(function(total, product) {
        return total + product.price;
    }, 0);
}


// Test

console.log(getProducts());

console.log(findProduct(2));

console.log(filterByCategory("Electronics"));

console.log("Total:",
    calculateTotal()
);