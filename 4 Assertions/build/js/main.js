"use strict";
// convert to more or less specific
let a = "Hello";
let b = a; // less specific
let c = a; // more specific
let d = 'world'; // These angular syntax cnt b used in tsx files for react.
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 3, 'concat');
// THE DOM: Ts is unable to find types implicitly in various cases, like here. So we can tell ts by using assertions.
const img = document.querySelector('img');
const myImg = document.querySelector('#img');
myImg.src; // it is saying that myImg can be null, so to tell ts that something is not null, either we can specify type using 'as some type' like above OR we can use non-null assertion like below
const myNewImg = document.querySelector('#imgId');
