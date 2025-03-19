// nodemon index.js

export const quick = (fn) => (arr) => {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = [];
  const equal = [];
  const right = [];

  for (const item of arr) {
    const compare = fn(item, pivot);
    if (compare < 0) left.push(item);
    else if (compare > 0) right.push(item);
    else equal.push(item);
  }

  return [...quick(fn)(left), ...equal, ...quick(fn)(right)];
};
