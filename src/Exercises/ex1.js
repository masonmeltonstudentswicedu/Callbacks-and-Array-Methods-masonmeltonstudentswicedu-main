const students = [
  { name: "Alex Chen", grade: 95, subject: "Math" },
  { name: "Jordan Smith", grade: 87, subject: "Science" },
  { name: "Taylor Johnson", grade: 92, subject: "Math" },
  { name: "Casey Davis", grade: 78, subject: "Science" },
  { name: "Morgan Lee", grade: 96, subject: "Math" },
];

const displayNames = students.map(student => {
  return `${student.name} (${student.grade}%)`;
});
console.log("EX1.1", displayNames);

const honorRoll = students.filter(student => student.grade >= 90);
console.log("EX1.2", honorRoll);

console.log("EX1.3");
students.forEach(student => {
  console.log(`${student.name}: ${student.grade}% in ${student.subject}`);
});

const withHonorFlag = students.map(student => ({
  ...student,
  isHonorRoll: student.grade >= 90
}));
console.log("EX1.4", withHonorFlag);