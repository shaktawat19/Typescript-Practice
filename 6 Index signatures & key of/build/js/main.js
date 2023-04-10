"use strict";
// Index Signatures: Generally used for accessing objct's data dynamically.
// interface TransactionObj {
//   Pizza: number,
//   Books: number,
//   Job: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']); // working fine bcz of line-4
let prop = 'Pizza';
console.log(todaysTransactions[prop]); // working fine bcz of line-4
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction]; // working fine bcz of line-4
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "Harsh",
    GPA: 9.8,
    classes: [100, 200]
};
console.log(student.age); // it doesnt exist in student obj but still ts has no problem bcz of idx signature we hv done in line-41
//
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // working fine bcz of line-41
    // alternative, if we remove line-41 then:
    // console.log(`${key}: ${student[key as keyof Student]}`);
}
//
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
const monthlyIncomes = {
    salary: 500000000,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
    // Solution: keyof assertion
    console.log(monthlyIncomes[revenue]);
}
