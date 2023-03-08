function capitalize(word) {
  const letter = word.charAt(0).toUpperCase();
  return letter + word.substr(1);
}

export { capitalize };
