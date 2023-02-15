import {IBoot} from "./IBoot";
import {ICategory} from "./ICategory";
import {IProducts} from "./IProducts";

const boot1 : IBoot = {
    ID: 5,
    Size: 24,
    Color: "Red",
    Price: 123
};

const boot2 : IBoot =  {
    ID: 101,
    Size: 53,
    Color: "Yellow",
    Price: 900
};

const sandal1 : IBoot = {
    ID: 142,
    Size: 24,
    Color: "Blue",
    Price: 189
}
const sneakers1 : IBoot = {
    ID: 11,
    Size: 23,
    Color: "Red",
    Price: 150
}

const Boots : ICategory = {
    ID: 1,
    Boots: [boot1, boot2]
}

const Sandals : ICategory = {
    ID: 2,
    Boots: [sandal1]
}

const Sneakers : ICategory = {
    ID: 3,
    Boots: [sneakers1]
}

const products : IProducts = {
    Products: Boots.Boots.concat(Sandals.Boots, Sneakers.Boots)
}

console.log(`Exesize 1`)
products.Products.forEach(element => {
    console.log(element.ID);
});

export default products;