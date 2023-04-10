const echo = <T>(arg: T): T => arg;

//////////////////////////////////////////
const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3]));
console.log(isObj({ name: "John" }));
console.log(isObj(null));

/////////////////////////////////////////////
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  if(isObj(arg) && !Object.keys(arg as keyof T).length){
    return {
      arg,
      is: false,
    };
  }

  return {
    arg,
    is: !!arg,
  };
};
console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('Dave'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({})) // modified
console.log(isTrue({ name: 'Dave' }))
console.log(isTrue([])) // modified
console.log(isTrue([1, 2, 3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

//////////////////////////////////////////////////
interface HasID {
  id: number
}
const processUser = <T extends HasID>(user: T): T => {
  // process the user with logic here
  return user;
}
console.log(processUser({id: 1, name: "Harsh"}));
