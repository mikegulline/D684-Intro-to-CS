// start: run nodemon dsa/quicksort.js
// stop: run Ctrl + C

/*
  QuickSort is a divide-and-conquer sorting algorithm 
  that is fast and efficient for large datasets. It 
  works by selecting a pivot, partitioning the array 
  around it, and then recursively sorting the partitions.

  Best Case:	    O(n log n)
  Average Case:	  O(n log n)
  Worst Case:     (unbalanced partitions)	O(n²)

  ✅ Fastest sorting algorithm in most cases (O(n log n)).
  ✅ In-place sorting (if implemented iteratively).
  ✅ Recursive approach (can be optimized using iterative versions).
  ✅ Best when applied to large, unordered datasets.
  */

// base case

// define pivot

// filter left "smaller"

// filter right "bigger"

// return new array
// [...fn(left), pivot, ...fn(right)]

const arrNumbers = [1, 5, 10, 3, 44, 6, 100, 33, 92, 9, 18, 55, 200];
const arrStrings = [
  'vibe',
  'check',
  'one',
  'two',
  'three',
  'a',
  'car',
  'train',
  'window',
];

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = arr.filter((n) => n < pivot);
  const right = arr.filter((n) => n > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort(arrNumbers));
console.log('=====================');

/////////////////////////////
// functional programing
// pass compare fn
// then pass array
/////////////////////////////

const qsFnArr = (fn) => (arr) => {
  if (arr.length <= 1) return arr;

  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];

  const left = arr.filter((n) => fn(n, pivot) < 0);
  const right = arr.filter((n) => fn(n, pivot) > 0);

  return [...qsFnArr(fn)(left), pivot, ...qsFnArr(fn)(right)];
};

/////////////////////////////
const fnCompareStrings = (a, b) => a.localeCompare(b);
const qsStrings = qsFnArr(fnCompareStrings);
console.log(qsStrings(arrStrings));
// or
console.log(qsFnArr(fnCompareStrings)(arrStrings));

/////////////////////////////
const fnCompareNumbers = (a, b) => a - b;
const qsNumbers = qsFnArr(fnCompareNumbers);
console.log(qsNumbers(arrNumbers));
// or
console.log(qsFnArr(fnCompareNumbers)(arrNumbers));
