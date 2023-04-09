// Type Aliases:
type stringOrNumber = string | number;
type stringOrNumberArray = (string | number)[];
type GGuitarist = {
  name: string;
  active?: boolean;
  albums: stringOrNumberArray;
};
type userId = stringOrNumber

interface stOrN {
  active: true
}
// interface PostId = stOrN // We cant do this like type above


// Literal types:
let userName: 'Harsh' | 'vardhan';
// userName = "someone"; // err bcz not a type



// Functions:
const add = (a: number, b: number): number => {
    return a + b;
}
const logMsg = (message: any): void => console.log(message);
logMsg('Hello');
console.log(add(2,3));


type mathFunction = (a: number, b: number) => number
interface mathFn {
  (a: number, b: number) : number
}
const subtract: mathFunction = (c, d) => {
  return c - d;
}
const multiply: mathFn = (c, d) => {
  return c * d;
}
// NOTE:
// for fns and other things, the type aliases suits more.
// For classes stuff, the interface suits more.


// optional parameters: shld be in the last
const addAll = (a: number, b: number, c?: number): number => {
  if(typeof c !== 'undefined') {
    return a + b + c ;
  }
  return a + b ;
}


// default param value:
const sumAll = (a: number = 2, b: number): number => {
  return a + b ;
}
console.log(sumAll(undefined, 20)); // gives 22
// default values won't work if we use type aliases



// Rest Parameters:
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}
console.log(total(1, 2, 5));



// never type: for fns thrwoing errors.
const createErr = (errMsg: string): never => {
  throw new Error(errMsg);
}

const numOrString = (value: number | string): string => {
  if(typeof value === 'string') return 'string';
  if(typeof value === 'number') return 'number';
  return createErr('This should never happen');
} // whenever there are return statements in conditions, ts wants one
  //       return without condition, so to make sure code work.