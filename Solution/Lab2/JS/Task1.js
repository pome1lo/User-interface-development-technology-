"use strict";
// exports.__esModule = true;
var boot1 = {
    ID: 5,
    Size: 24,
    Color: "Red",
    Price: 123
};
var boot2 = {
    ID: 101,
    Size: 53,
    Color: "Yellow",
    Price: 900
};
var sandal1 = {
    ID: 142,
    Size: 24,
    Color: "Blue",
    Price: 189
};
var sneakers1 = {
    ID: 11,
    Size: 23,
    Color: "Red",
    Price: 150
};
var Boots = {
    ID: 1,
    Boots: [boot1, boot2]
};
var Sandals = {
    ID: 2,
    Boots: [sandal1]
};
var Sneakers = {
    ID: 3,
    Boots: [sneakers1]
};
var products = {
    Products: Boots.Boots.concat(Sandals.Boots, Sneakers.Boots)
};
console.log("Task 1");
products.Products.forEach(function (element) {
    console.log(element.ID);
});
// exports["default"] = products;
