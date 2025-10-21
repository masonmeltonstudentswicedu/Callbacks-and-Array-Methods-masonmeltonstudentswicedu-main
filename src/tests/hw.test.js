const { studentData, withAverages } = require("../hw/part1");

test("map adds average", () => {
  const r = withAverages(studentData);
  expect(r).toHaveLength(studentData.length);
  expect(r.every(s => typeof s.average === "number")).toBe(true);
});

test("filter averages > 85", () => {
  const r = withAverages(studentData).filter(s => s.average > 85);
  expect(r.every(s => s.average > 85)).toBe(true);
});