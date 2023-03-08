import { capitalize } from "../src/capitalize";

test("take string and return with first character capitalized", () => {
  expect(capitalize("test")).toBe("Test");
});
