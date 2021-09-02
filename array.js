"use strict";

let x = 0;

const range = [];

document.addEventListener("DOMContentLoaded", theCounter);
function theCounter() {
    console.log("theCounter");

    range.unshift(x);
    x++
    if (x > 9) {
        range.pop(range);
    }
    console.log(range);
    setTimeout(theCounter, 500);
}