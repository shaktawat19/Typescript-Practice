let stringArr = ['one', 'two'];
let guitars = ['dfd', 45, true];

let arr: string[] = ['1', '2'];

// Tuple: elems should be in order acc. to annotation types given. 
let myTuple: [string, number, boolean] = ['dfd', 45, true];


///////////////////////// Objects:
let myObj: object = []
console.log(typeof myObj);

const exampleObj = {
    prop1: 'sdf',
    prop2: false
}
// exampleObj.prop2 = 34; // ts wont accept number type here.


// type
type Guitarist = {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}
let evh: Guitarist = {
    name: "harsh",
    // active: true,
    albums: [340, "df34"]
}
// evh.age = 25; // err since age doesnt exist in type


// interface: works same as type. We'll see more later
interface GGuitarist {
    name: string,
    active?: boolean,
    albums: (string | number)[]
}


// Enums: Unlike most typescript features, Enums are
// not type-level addition to Js but something added
//  to the language and runtime.
enum Grade {
    U, 
    D,
    C,
    B,
    A
}
console.log(Grade.U); // gives 0 by default
