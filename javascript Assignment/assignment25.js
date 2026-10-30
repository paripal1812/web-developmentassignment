let shoppingList = [];

function addItem(item) {
    shoppingList.push(item);
    console.log(item + " added");
}

function removeItem(item) {

    let index = shoppingList.indexOf(item);

    if (index !== -1) {
        shoppingList.splice(index, 1);
        console.log(item + " removed");
    } else {
        console.log("Item not found");
    }
}

function showList() {
    console.log("Shopping List:");

    shoppingList.forEach(function(item, index) {
        console.log(index + 1 + ". " + item);
    });
}


addItem("Milk");
addItem("Bread");
addItem("Eggs");

showList();

removeItem("Bread");

showList();