"use strict";
// utility types
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "dfsdwr24",
    title: "Final Project",
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 96 }));
