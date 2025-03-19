// nodemon index.js

export const insertion = (fn) => (arr) => {
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
