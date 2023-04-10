// Index Signatures: Generally used for accessing objct's data dynamically.

interface TransactionObj {
 readonly [index: string]: number, // states that all keys will be string n values will b number
}

// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }
const todaysTransactions: TransactionObj = {
  Pizza: -10,
  Books: -5,
  Job: 50
}
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']); // working fine bcz of line-4

let prop: string = 'Pizza';
console.log(todaysTransactions[prop]);  // working fine bcz of line-4

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for(const transaction in transactions) {
    total += transactions[transaction]; // working fine bcz of line-4
  }

  return total;
}
console.log(todaysNet(todaysTransactions));

// Note: Since we have made above interface as readonly, 
//  we cnt assign values. To assign values, jst remove 'readonly'.
// todaysTransactions['Pizza'] = 30

// console.log(todaysTransactions['harsh']); // gives undefined, as this property dsnt exist.

/////////////////////////////////////////////////////////

interface Student {
  [key: string]: string | number | number[] | undefined
  name: string,
  GPA: number,
  classes?: number[]
}
const student: Student = {
  name: "Harsh",
  GPA: 9.8,
  classes: [100, 200]
}
console.log(student.age); // it doesnt exist in student obj but still ts has no problem bcz of idx signature we hv done in line-41

//
for (const key in student) {
  console.log(`${key}: ${student[key]}`); // working fine bcz of line-41

  // alternative, if we remove line-41 then:
  // console.log(`${key}: ${student[key as keyof Student]}`);
}

//
const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
}

/////////////////////////////////////////////////////

// interface Incomes {
//   [key: string]: number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'
type Incomes = Record<Streams, number>
const monthlyIncomes: Incomes = {
  salary: 500000000,
  bonus: 100,
  sidehustle: 250
}
for(const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue]);
  // Solution: keyof assertion
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}