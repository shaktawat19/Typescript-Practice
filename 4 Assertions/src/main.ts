type One = string;
type Two = string | number;
type Three = 'hello';

// convert to more or less specific
let a: One = "Hello";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>'world'; // These angular syntax cnt b used in tsx files for react.
let e = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
  if(c === 'add') return a + b;
  return '' + a + b;
} 
let myVal: string = addOrConcat(2, 3, 'concat')  as string


// THE DOM: Ts is unable to find types implicitly in various cases, like here. So we can tell ts by using assertions.
const img = document.querySelector('img') as HTMLImageElement
const myImg = document.querySelector('#img')
myImg.src // it is saying that myImg can be null, so to tell ts that something is not null, either we can specify type using 'as some type' like above OR we can use non-null assertion like below
const myNewImg = document.querySelector('#imgId')!
