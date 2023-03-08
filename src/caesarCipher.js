const isUpperCase = (string) => /^[A-Z]*$/.test(string);
const isPunctuation = (string) => /^[.,\/#!$%\^&\*;:{}=\-_`~()]*$/.test(string);

function _matchString(strArr, strArrIdx, abcArr, shiftFactor) {
  strArr[strArrIdx] = strArr[strArrIdx].toLowerCase();
  for (let y = 0; y <= abcArr.length - 1; y++) {
    if (strArr[strArrIdx] === abcArr[y]) {
      if (y + shiftFactor > abcArr.length - 1) {
        y = shiftFactor - (abcArr.length - y);
        return abcArr[y];
      }
      return abcArr[y + shiftFactor];
    }
  }
}

function _iterateOverStr(strArr, abcArr, shiftFactor) {
  for (let x = 0; x <= strArr.length - 1; x++) {
    if (isUpperCase(strArr[x])) {
      strArr[x] = _matchString(strArr, x, abcArr, shiftFactor).toUpperCase();
    } else if (isPunctuation(strArr[x])) {
      continue;
    } else {
      strArr[x] = _matchString(strArr, x, abcArr, shiftFactor);
    }
  }
  return strArr;
}

function caesarCipher(str, shiftFactor) {
  // Convert the strings arrays
  let alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringArr = str.split("");
  // Find array index with the current index of str
  const finalStr = _iterateOverStr(stringArr, alphabetArr, shiftFactor).join(
    ""
  );
  return finalStr;
}

export { caesarCipher };
