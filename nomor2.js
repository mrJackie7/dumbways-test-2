// Bahasa Pemrograman: Javascript (NodeJS)
// Function untuk melakukan trasnpose
const transpose = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
};

// Array yang akan ditest
const arr = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

// Set arr ke fungsi transpose
transpose(arr);

// print out hasil arr
console.log(arr);
