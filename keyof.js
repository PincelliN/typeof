"use strict";
let ageUser = "age";
let nameUser = "name";
function getEl(obj, key) {
    const el = obj[key];
    if (el === undefined || el === null) {
        throw new Error("Accessing undefined or null value.");
    }
    return el;
}
const User2 = { name: "Nik", lastname: "Pin", age: "33" };
getEl(User2, "age");
console.log(getEl(User2, "name"));
