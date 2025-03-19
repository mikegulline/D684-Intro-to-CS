import { quick } from './quick-sort.js';
import { selection } from './selection-sort.js';
import { insertion } from './insertion-sort.js';
import { merge } from './merge-sort.js';

export const sort = {
  quick,
  selection,
  insertion,
  merge,
};

export const arrNumbers = [
  1, 5, 5, 5, 5, 10, 3, 44, 6, 100, 33, 92, 9, 18, 55, 200,
];
export const arrStrings = [
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
export const arrPeople = [
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 20 },
  { name: 'Alice', age: 25 },
];

export const compareStrings = (a, b) => a.localeCompare(b);
export const compareNumbers = (a, b) => a - b;
export const compareObjAge = (a, b) => a.age - b.age;
export const compareObjName = (a, b) => a.name.localeCompare(b.name);

export const log = (name) => {
  console.log(name.padEnd(45, '='));
};

export const functions = [
  compareStrings,
  compareNumbers,
  compareObjAge,
  compareObjName,
];

export const types = ['strings', 'numbers', 'object->age', 'object->name'];

export const arrays = [arrStrings, arrNumbers, arrPeople, arrPeople];

export const test = (name, fn, args) => {
  const start = performance.now();
  const result = fn(args);
  const end = performance.now();
  console.log(`${name}    Execution Time: ${(end - start).toFixed(5)} ms`);
  return result;
};
