import { analyzeArray, analyzer } from "../src/analyzeArray";
// Test each individual analyzer function in isolation

test("returns average", () => {
  expect(analyzer.average([1, 2])).toBe(1.5);
});

test("return lowest number", () => {
  expect(analyzer.min([4, 2, 1, 8])).toBe(1);
});

test("return highest number", () => {
  expect(analyzer.max([4, 2, 1, 8])).toBe(8);
});

test("return length of array", () => {
  expect(analyzer.lenOfArr([4, 2, 1, 8])).toBe(4);
});

// Test analyze array in completion
test("returns an object with the following properties: average, min, max, and length", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
