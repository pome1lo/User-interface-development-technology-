"use strict";
var filterByCost = function (iterator, costStart, costEnd) {
    var result = [];
    var current;
    iterator.reset();
    while (iterator.hasNext()) {
        current = iterator.next();
        if (current.Price >= costStart && current.Price <= costEnd) {
            result.push(current);
        }
    }
    return result;
};
var filterBySize = function (iterator, size) {
    var result = [];
    iterator.reset();
    while (iterator.hasNext()) {
        var current = iterator.next();
        if (current.Size === size) {
            result.push(current);
        }
    }
    return result;
};
var filterByColor = function (iterator, color) {
    var result = [];
    iterator.reset();
    while (iterator.hasNext()) {
        var current = iterator.next();
        if (current.Color === color) {
            result.push(current);
        }
    }
    return result;
};
console.log("Task 2 and Task 3 \u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u0446\u0435\u043D\u0435 \u043E\u0442 100 \u0434\u043E 200");
console.log("\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 23");
console.log("\u041E\u0442\u0444\u0438\u043B\u044C\u0442\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 \u043F\u043E \u0446\u0432\u0435\u0442\u0443 Red");
