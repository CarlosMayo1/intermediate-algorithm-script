// This is exercise #2
function diffArray(arr1, arr2) {
  // Solution #1
  return arr1
    .concat(arr2)
    .fitler((element) => !arr1.includes(element) || !arr2.includes(element));
}

function diffArray(arr1, arr2) {
  // Solution #2
  const newArr = [];

  function isOnlyInFirst(first, second) {
    for (let i = 0; i < first.length; i++) {
      if (second.indexOf(first[i]) < 0) {
        newArr.push(first[i]);
      }
    }
  }

  isOnlyInFirst(arr1, arr2);
  isOnlyInFirst(arr2, arr1);

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
