// Bahasa Pemrograman: Javascript (NodeJS)
// Require prompt-sync untuk bisa ambil input dari user
// const prompt = require("prompt-sync")({ sigint: true });

// Fungsi untuk membuat segitiga dari angka prima
const trianglePrime = (n) => {
  let num = 2,
    str = "";
  for (let i = 0; i <= n; i++) {
    // creating prime pattern
    for (let j = 0; j <= i; j++) {
      while (!prime(num)) num++;
      str += `${num++} `;
    }
    str += "\n";
  }
  console.log(str);
};

// Fungsi untuk generate angka prima
const prime = (num) => {
  let flag;
  for (let i = 2; i < num; i++) {
    if (num % i != 0) {
      flag = 1;
    } else {
      flag = 0;
      break;
    }
  }

  return flag == 1 || num == 2 ? true : false;
};

// Mendapatkan input dari user
// let yourNumber = prompt("Masukan angka yang anda pikirkan: ");
trianglePrime(8);
