let laptop = {

    name: "HP Pavilion",

    price: 65000,

    category: "Laptop",

    specifications: {

        processor: {
            brand: "Intel",
            model: "Core i5",
            generation: "12th"
        },

        memory: {
            ram: "16GB",
            storage: "512GB SSD"
        },

        display: {
            size: "15.6 inch",
            resolution: "1920x1080"
        }
    }
};


console.log(laptop);

console.log(
    "Processor:",
    laptop.specifications.processor.model
);

console.log(
    "RAM:",
    laptop.specifications.memory.ram
);

console.log(
    "Storage:",
    laptop.specifications.memory.storage
);