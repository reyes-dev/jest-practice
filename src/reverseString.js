function reverseString(word) {
  let reversedString = [];
  word = word.split("");
  word.forEach((letter) => reversedString.unshift(letter));
  reversedString = reversedString.join("");
  return reversedString;
}

export { reverseString };
