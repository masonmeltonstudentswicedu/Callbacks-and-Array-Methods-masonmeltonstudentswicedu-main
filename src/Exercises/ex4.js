const employees = [
  { name: "Sarah", department: "Engineering", salary: 95000, yearsExperience: 5 },
  { name: "Mike", department: "Marketing", salary: 65000, yearsExperience: 3 },
  { name: "Lisa", department: "Engineering", salary: 85000, yearsExperience: 2 },
  { name: "David", department: "Sales", salary: 70000, yearsExperience: 7 },
  { name: "Emma", department: "Engineering", salary: 110000, yearsExperience: 8 },
];

// Assembly line: Filter → Map → Display results
const seniorEngineers = employees
  .filter(employee => employee.department === "Engineering")
  .filter(employee => employee.yearsExperience >= 5)
  .map(employee => ({
    name: employee.name,
    salary: employee.salary,
  }));
console.log("EX4.1", seniorEngineers);