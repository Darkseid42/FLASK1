"use strict";
let rocker; // Type: any
rocker = "Joan Jett"; // Type: string
rocker.toUpperCase(); // Ok rocker = 19.58; // Type: number
//rocker.toPrecision(1); // Ok
rocker.toUpperCase();
let singer = "Ella Fitzgerald";
let researcher = Math.random() > 0.5 ? "Rosalind Franklin"
    : 51;
if (typeof researcher === "string") {
    researcher.toUpperCase(); // Ok: string
}
console.log(singer);
console.log(researcher);
// Ok: all fields match what's expected in Poet
const poetMatch = { born: 1928,
    name: "Maya Angelou"
};
// const extraProperty: Poet = { 
//     activity: "walking", 
//     born: 1935,
//     name: "Mary Oliver",
// };
// activity isn't defined and isn't known and cannot be added to Poet==========
const existingObject = { activity: "walking", born: 1935,
    name: "Mary Oliver",
};
const extraPropertyButOk = existingObject; // Ok
