// This is exercise #1

function sumAll(arr) {
  // Solution #1
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  // This is a new array that contains all the numbers in between
  const newArray = [];

  for (minValue; minValue <= maxValue; minValue++) {
    newArray.push(minValue);
  }

  return newArray.reduce((prev, current) => prev + current);
}

function sumAll(arr) {
  // Solution #2
  const maxValue = Math.max(...arr);
  const minValue = Math.min(...arr);

  // This is a new array that contains all the numbers in between
  const newArray = [];

  while (minValue <= maxValue) {
    newArray.push(minValue);
    minValue++;
  }

  return newArray.reduce((prev, current) => prev + current);
}

sumAll([1, 4]);
