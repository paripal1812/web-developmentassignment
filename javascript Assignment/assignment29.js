let product = {
    id: 101,

    name: "Laptop",

    price: 55000,

    brand: "HP",

    available: true,

    specifications: {
        processor: "Intel i5",
        ram: "16GB",
        storage: "512GB SSD",
        screen: "15.6 inch"
    }
};

console.log(product);

console.log("Product:", product.name);
console.log("Price:", product.price);

console.log("Processor:",
    product.specifications.processor
);

console.log("RAM:",
    product.specifications.ram
);