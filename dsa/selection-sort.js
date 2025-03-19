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

const compareNumbers = (a, b) => a - b;
const compareStrings = (a, b) => a.localeCompare(b);
const compareObjAge = (a, b) => a.age - b.age;
const compareObjName = (a, b) => a.name.localeCompare(b.name);

const arrNumbers = [1, 5, 5, 5, 5, 10, 3, 44, 6, 100, 33, 92, 9, 18, 55, 200];
const arrStrings = [
  'vibe',
  'check',
  'one',
  'two',
  'three',
  'a',
  'a',
  'a',
  'car',
  'train',
  'window',
];
const arrPeople = [
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'Alice', age: 25 },
];

console.log(selectionSortFnArr(compareNumbers)(arrNumbers));
console.log(selectionSortFnArr(compareStrings)(arrStrings));
console.log(selectionSortFnArr(compareObjName)(arrPeople));
console.log(selectionSortFnArr(compareObjAge)(arrPeople));
