// nodemon index.js

export const merge = (fn) => (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = merge(fn)(arr.slice(0, mid));
  const right = merge(fn)(arr.slice(mid));

  return doMerge(fn)(left, right);
};

const doMerge = (fn) => (left, right) => {
  const sortedArr = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (fn(left[i], right[j]) < 0) {
      sortedArr.push(left[i++]);
    } else {
      sortedArr.push(right[j++]);
    }
  }
  return [...sortedArr, ...left.slice(i), ...right.slice(j)];
};
