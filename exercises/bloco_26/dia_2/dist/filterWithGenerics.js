"use strict";
function myFilter(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(myFilter([1, 2, 3], (item) => {
    return item < 3;
}));
console.log(myFilter(["a", "b", "c"], (item) => {
    return item !== "a";
}));
