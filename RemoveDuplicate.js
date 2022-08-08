// first solution using hash
const removeDuplicate = (arr) => {
  const result = [];
  const hash = {};

  for (let value of arr) {
    if (!hash[value]) {
      result.push(value);
      hash[value] = true;
    }
  }
  return result;
};
// second solution using array include method
const removeDuplicateUsingInclude = (arr) => {
  const result = [];
  for (let i of arr) {
    if (!result.includes(i)) {
      result.push(i);
    }
  }
};
// third solution using array indexOf method
function removeDuplicateUsingindexOf(arr) {
  const result = [];
  for (let i of arr) {
    if (result.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}
// fourth solution using set
const removeDuplicateUsingSet = (arr) => {
  const result = [...new Set(arr)];
  return result;
};

console.log(
  'remove duplicate using hash',
  removeDuplicate([23, 34, 23, 34, 55, 66, 66, 55, 77, 88, 888])
);
console.log(
  'remove duplicate using array includes',
  removeDuplicateUsingInclude([23, 34, 23, 34, 55, 66, 66, 55, 77, 88, 888])
);
console.log(
  'remove duplicate using array indexOf',
  removeDuplicateUsingindexOf([23, 34, 23, 34, 55, 66, 66, 55, 77, 88, 888])
);
console.log(
  'remove duplicate using Set',
  removeDuplicateUsingSet([23, 34, 23, 34, 55, 66, 66, 55, 77, 88, 888])
);
