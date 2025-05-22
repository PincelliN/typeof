"use strict";
let mathOperations = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};
let mathResult = {
    add: mathOperations.add(1, 2),
    subtract: mathOperations.subtract(2, 4),
};
console.log(mathResult.add);
