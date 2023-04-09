"use strict";
let stringArr = ['one', 'two'];
let guitars = ['dfd', 45, true];
let arr = ['1', '2'];
// Tuple: elems should be in order acc. to annotation types given. 
let myTuple = ['dfd', 45, true];
///////////////////////// Objects:
let myObj = [];
console.log(typeof myObj);
const exampleObj = {
    prop1: 'sdf',
    prop2: false
};
let evh = {
    name: "harsh",
    // active: true,
    albums: [340, "df34"]
};
// Enums: Unlike most typescript features, Enums are
// not type-level addition to Js but something added
//  to the language and runtime.
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // gives 0 by default
