// nodemon selection-sort.js
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

const selectionSortFnArr = (fn) => (arr) => {
  let i, j, smallestIndex, temp;

  for (i = 0; i < arr.length - 1; i++) {
    smallestIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      if (fn(arr[j], arr[smallestIndex]) < 0) {
        smallestIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }

  return arr;
};

log('SelectionSort');

console.log(selectionSortFnArr(compareNumbers)(arrNumbers));
console.log(selectionSortFnArr(compareStrings)(arrStrings));
console.log(selectionSortFnArr(compareObjName)(arrPeople));
console.log(selectionSortFnArr(compareObjAge)(arrPeople));
