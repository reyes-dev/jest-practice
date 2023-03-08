const calculator = (() => {
  const sum = (arr) => arr.reduce((partialSum, a) => partialSum + a, 0);
  const sub = (a, b) => a - b;
  const mul = (a, b) => a * b;
  const div = (a, b) => a / b;
  return {
    sum,
    sub,
    mul,
    div,
  };
})();

const analyzer = (() => {
  const average = (arr) => {
    return calculator.sum(arr) / arr.length;
  };
  const min = (arr) => {
    return arr.sort()[0];
  };
  const max = (arr) => {
    return arr.sort().reverse()[0];
  };
  const lenOfArr = (arr) => {
    return arr.length;
  };

  return {
    average,
    min,
    max,
    lenOfArr,
  };
})();

function analyzeArray(numArray) {
  const object = {
    average: analyzer.average(numArray),
    min: analyzer.min(numArray),
    max: analyzer.max(numArray),
    length: analyzer.lenOfArr(numArray),
  };

  return object;
}

export { analyzeArray, analyzer };
