// UTILITY types

// partial:
interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}
const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment>
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  };
};
const assign1: Assignment = {
  studentId: "dfsdwr24",
  title: "Final Project",
  grade: 0,
};
console.log(updateAssignment(assign1, { grade: 96 }));
const assignGraded: Assignment = updateAssignment(assign1, {
  grade: 95,
});



// Required(means all properties required) and Readonly:
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  // send to database, etc.
  return assign;
}
const assignVerified: Readonly<Assignment> = {
  ...assignGraded,
  verified: true
}
assignVerified.grade = 23; // err bcz readonly
recordAssignment(assignGraded); // err bcz required verified property too
recordAssignment({...assignGraded, verified: true});


// Record:
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF"
}
type Students = "Sara" | "Harsh";
type LetterGrades = "A" | "B" | "C" | "U"
const finalGrades: Record<Students, LetterGrades> = {
  Sara: "A",
  Harsh: "U"
}

interface Grades {
  assign1: number,
  assign2: number
}
const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 70 },
  Harsh: { assign1: 89, assign2: 90 }
}


// Pick(means pick few properties) and omit(to not use few properties): Applied to interface.
type AssignResult = Pick<Assignment, "studentId" | "grade">;
const score: AssignResult = {
  studentId: "kj34",
  grade: 90
}

type AssignPreview = Omit<Assignment, "grade" | "verified">;
const preview: AssignPreview = {
  studentId: "df43",
  title: "final project"
}


// Exclude and Extract: work with string literal union types.
type adjustedGrade = Exclude<LetterGrades, "U">;
type highGrades = Extract<LetterGrades, "A" | "B">;


// NonNullable: gives us the non nullable data
type AllPossibleGrades =  'Dave' | 'John' | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>;


// ReturnType: return type will be update if fn's return type changes.
const createNewAssign = (title: string, points: number) => {
  return {
    title,
    points
  }
}
type NewAssign = ReturnType<typeof createNewAssign>

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);



// Parameters:
type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ["Generics", 100]; 
const tsAssign2: NewAssign = createNewAssign(...assignArgs);


// Awaited: helps us with ReturnType of a promise.
interface User {
  id: number,
  name: string,
  username: string,
  email: string
}
const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch(
    'https://jsonplaceholder.typicode.com/users'
  ).then(res => {
    return res.json()
  }).catch(err => {
    if(err instanceof Error) console.log(err.message);
  })

  return data;
}
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>;
fetchUsers().then(users => console.log(users));