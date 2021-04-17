// Bahasa Pemrograman: Javascript (NodeJS)
// Require prompt-sync untuk bisa ambil input dari user
//const prompt = require("prompt-sync")({ sigint: true });

// Function untuk menghitung kembalian beserta jumlah uangnya
const hitungKembalian = (payment, money) => {
  // check jika inputnya berformat angka
  // !)Number(payment) || !Number(money)
  //   ? console.log("Harap masukan jumlah nominal uang yang benar!")
  //   : false;

  // Hitung dulu jumlah kembaliannnya
  let exchange = money - payment;
  // Check kalo uangnya kurang
  exchange < 0
    ? console.log(`Uangnya kurang ${exchange * -1} lagi!`)
    : nominalCounter(exchange);
};

// Fungsi untuk menghitung berapa mata uang yang dibutuhkan untuk kembalian
const nominalCounter = (exchange) => {
  //Check jumlah uangnya per pecahan
  let gobanan = Math.floor(exchange / 50000);
  let currExchange = exchange % 50000 != 0 ? exchange % 50000 : 0;
  let nobanan = Math.floor(currExchange / 20000);
  currExchange = currExchange % 20000 != 0 ? currExchange % 20000 : 0;
  let cebanan = Math.floor(currExchange / 10000);
  currExchange = currExchange % 10000 != 0 ? currExchange % 10000 : 0;
  let gocengan = Math.floor(currExchange / 5000);
  currExchange = currExchange % 5000 != 0 ? currExchange % 5000 : 0;
  let nocengan = Math.floor(currExchange / 2000);
  currExchange = currExchange % 2000 != 0 ? currExchange % 2000 : 0;
  let secengan = Math.floor(currExchange / 1000);
  currExchange = currExchange % 1000 != 0 ? currExchange % 1000 : 0;
  let gopean = Math.floor(currExchange / 500);
  currExchange = currExchange % 500 != 0 ? currExchange % 500 : 0;

  // print out jumlah lembaran uang yang akan dikembalikan dengan operator ternary
  console.log(
    `${gobanan != 0 ? `Jumlah 50000: ${gobanan} lembar\n` : ""}${
      nobanan != 0 ? `Jumlah 20000: ${nobanan} lembar\n` : ""
    }${cebanan != 0 ? `Jumlah 10000: ${cebanan} lembar\n` : ""}${
      gocengan != 0 ? `Jumlah 5000: ${gocengan} lembar\n` : ""
    }${nocengan != 0 ? `Jumlah 2000: ${nocengan} lembar\n` : ""}${
      secengan != 0 ? `Jumlah 1000: ${secengan} lembar\n` : ""
    }${gopean != 0 ? `Jumlah 500: ${gopean} lembar\n` : ""}${
      currExchange != 0 ? `Masih ada sisa ${currExchange} lagi.` : ""
    }`
  );
};

// let yourPayment = prompt("Masukan pembayaran: ");
// let yourMoney = prompt("Masukan uangmu: ");
// console.log("");
// console.log(`Pembayaran anda: ${yourPayment}\nUang Anda: ${yourMoney}`);
// menjalankan fungsi si hitung kembalian
hitungKembalian(15500, 50000);
