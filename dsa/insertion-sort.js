// nodemon insertion-sort.js

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

const insertionSort = (fn) => (arr) => {
  let i, j, temp;

  for (i = 1; i < arr.length; i++) {
    j = i;
    while (j > 0 && fn(arr[j], arr[j - 1]) < 0) {
      temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }

  return arr;
};

log('InsertionSort');

console.log(insertionSort(compareStrings)(arrStrings));
console.log(insertionSort(compareNumbers)(arrNumbers));
console.log(insertionSort(compareObjAge)(arrPeople));
console.log(insertionSort(compareObjName)(arrPeople));
