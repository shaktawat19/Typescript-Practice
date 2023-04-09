"use strict";
// interface PostId = stOrN // We cant do this like type above
// Literal types:
let userName;
// userName = "someone"; // err bcz not a type
// Functions:
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => console.log(message);
logMsg('Hello');
console.log(add(2, 3));
const subtract = (c, d) => {
    return c - d;
};
const multiply = (c, d) => {
    return c * d;
};
// NOTE:
// for fns and other things, the type aliases suits more.
// For classes stuff, the interface suits more.
// optional parameters: shld be in the last
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
// default param value:
const sumAll = (a = 2, b) => {
    return a + b;
};
console.log(sumAll(undefined, 20)); // gives 22
// default values won't work if we use type aliases
// Rest Parameters:
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(1, 2, 5));
// never type: for fns thrwoing errors.
const createErr = (errMsg) => {
    throw new Error(errMsg);
};
const numOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (typeof value === 'number')
        return 'number';
    return createErr('This should never happen');
}; // whenever there are return statements in conditions, ts wants one
//       return without condition, so to make sure code work.
