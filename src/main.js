// src/main.js
/* Part 1 */
const myProfile = {
  name: "Mason Melton",
  age: 23,
  school: "SWIC",
  major: "Computer Science",
  hobbies: ["Gaming", "Boxing", "Reading"],
  isStudent: true
};

/* Part 2 */
console.log("Basic info:", myProfile.name, "is", myProfile.age, "years old.");
console.log("Education:", myProfile.school, "-", myProfile.major);
console.log("Hobbies:", myProfile.hobbies.join(", "));

console.log("\n=== Favorites (Arrays) ===");
const favoriteMovies = ["John Wick", "Doom 2007", "BeetleJuice", "Jeepers Creepers 2"];
const favoriteFoods  = ["Ramen", "Sushi", "Pizza", "Steak", "Tacos"];
const favoriteColors = ["Red", "Black", "Green"];

favoriteMovies.push("Avengers Endgame");
const removedFood = favoriteFoods.shift();
const colorIndex = favoriteColors.indexOf("Black");

console.log("Movies:", favoriteMovies);
console.log("Removed first food:", removedFood);
console.log("Foods now:", favoriteFoods);
console.log("Index of 'Black':", colorIndex);
console.log("Total favorites:", favoriteMovies.length + favoriteFoods.length + favoriteColors.length);

/* Part 3 */

console.log("\n=== Course Management (Array of Objects) ===");
const myCourses = [
  { code: "CIS-177", name: "Web Dev Development 1", instructor: "Prof. Misra", credits: 3, currentGrade: 86, isCompleted: false },
  { code: "CIS-195",  name: "Introduction to Database", instructor: "Prof. Thomas", credits: 3, currentGrade: 83, isCompleted: false }
];

function findCourse(code) {
  return myCourses.find(c => c.code === code) ?? null;
}
function totalCredits() {
  return myCourses.reduce((sum, c) => sum + c.credits, 0);
}
function listIncomplete() {
  return myCourses.filter(c => !c.isCompleted).map(c => c.code);
}
function highestGrade() {
  return Math.max(...myCourses.map(c => c.currentGrade));
}

console.log("Total courses:", myCourses.length);
console.log("Find CIS-177:", findCourse("CIS-177"));
console.log("Total credits:", totalCredits());
console.log("Incomplete:", listIncomplete());
console.log("Highest grade:", highestGrade());

/* Part 4 */

console.log("\n=== Nested Data & at(-1) ===");
const student = {
  name: "Taylor Wilson",
  contact: { email: "taylor@email.com", phone: "555-0123" },
  courses: ["Math", "Science", "History"],
  grades: { math: 95, science: 87, history: 92 }
};
console.log("Email:", student.contact.email);
console.log("First course:", student.courses[0]);
console.log("Last course via at(-1):", student.courses.at(-1));

console.log("\n=== Pitfalls: Reference & Length ===");
const a = ["Banana"];
const b = a;
b.push("Pear");
console.log("Same reference a===b:", a === b, "| a:", a);

let nums = [1,2,3,4,5];
nums.length = 2;
console.log("Truncated nums:", nums);
nums.length = 5;
console.log("Re-expanded (empty slots remain):", nums);


/* Part 5 */