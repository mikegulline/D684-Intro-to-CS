// nodemon quick-sort.js

import {
  arrNumbers,
  arrStrings,
  arrPeople,
  compareNumbers,
  compareStrings,
  compareObjAge,
  compareObjName,
  log,
} from './index.js';

const quickSortFnArr = (fn) => (arr) => {
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

  return [...quickSortFnArr(fn)(left), ...equal, ...quickSortFnArr(fn)(right)];
};

log('QuickSort');

console.log(quickSortFnArr(compareStrings)(arrStrings));
console.log(quickSortFnArr(compareNumbers)(arrNumbers));
console.log(quickSortFnArr(compareObjAge)(arrPeople));
console.log(quickSortFnArr(compareObjName)(arrPeople));
