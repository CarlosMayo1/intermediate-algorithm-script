// Exercise #3

function whatIsInAName(collection, source) {
  // Solution 01
  const srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    return srcKeys.every(function (key) {
      return obj.hasOwnProperty(key) && srcKeys[key] === source[key];
    });
  });
}

function whatIsInAName(collection, source) {
  // Solution 02
  const srcKeys = Object.keys(source);

  return collection.filter(function (obj) {
    for (let i = 0; i < srcKeys.length; i++) {
      if (
        !obj.hasOwnProperty(srcKeys[i]) ||
        obj[srcKeys[i]] !== source[srcKeys[i]]
      ) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" },
  ],
  { last: "Capulet" }
);
