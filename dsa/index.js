// nodemon index.js

import { sort, functions, arrays, types, log, test } from './utils.js';

for (let i = 0; i < 4; i++) {
  log(types[i]);
  test('  merge     ', sort.merge(functions[i]), arrays[i]);
  test('  insertion ', sort.insertion(functions[i]), arrays[i]);
  test('  quick     ', sort.quick(functions[i]), arrays[i]);
  test('  selection ', sort.selection(functions[i]), arrays[i]);
  console.log('');
}
