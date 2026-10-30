let cart = {

    items: [],

    addItem: function(name, price, quantity) {

        if (quantity <= 0) {
            console.log("Invalid quantity");
            return;
        }

        this.items.push({
            name: name,
            price: price,
            quantity: quantity
        });
    },

    calculateTotal: function() {

        let total = 0;

        for (let item of this.items) {
            total += item.price * item.quantity;
        }

        return total;
    },

    showCart: function() {

        for (let item of this.items) {

            console.log(
                item.name +
                " - ₹" +
                item.price +
                " x " +
                item.quantity
            );
        }

        console.log("Total:", this.calculateTotal());
    }
};


cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 500, 2);

cart.showCart();