import { Calculator } from "../src/calculator";

test("Adds 2 plus 2 to equal 4", () => {
  expect(new Calculator().add(2, 2)).toBe(4);
});

test("Subtracts 8 minus 4 to equal 4", () => {
  expect(new Calculator().subtract(8, 4)).toBe(4);
});

test("Divides 8 by 4 to equal 2", () => {
  expect(new Calculator().divide(8, 4)).toBe(2);
});

test("Multiplies 3 by 2 to equal 6", () => {
  expect(new Calculator().multiply(3, 2)).toBe(6);
});
