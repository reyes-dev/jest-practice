import { caesarCipher } from "../src/caesarCipher";

test("Takes a string and returns it with each character shifted", () => {
  expect(caesarCipher("abc", 1)).toBe("bcd");
});

test("Wraps from z to a", () => {
  expect(caesarCipher("asdqwdkwqoizyx", 7)).toBe("hzkxdkrdxvpgfe");
});

test("Keeps same case", () => {
  expect(caesarCipher("ABCDEFG", 7)).toBe("HIJKLMN");
});

test("Works with punctuation", () => {
  expect(caesarCipher("!!~~ABCDEFG~~!!", 7)).toBe("!!~~HIJKLMN~~!!");
});
