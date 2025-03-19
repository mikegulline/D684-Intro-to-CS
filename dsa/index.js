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

export const compareNumbers = (a, b) => a - b;
export const compareStrings = (a, b) => a.localeCompare(b);
export const compareObjAge = (a, b) => a.age - b.age;
export const compareObjName = (a, b) => a.name.localeCompare(b.name);

export const log = (name) => {
  console.log('');
  console.log('=========================');
  console.log(name.padEnd(25, '='));
  console.log('=========================');
};
