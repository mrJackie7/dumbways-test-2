# Test Dumb Ways Batch 23

##### Sabtu, 17 April 2021

Test ini dibuat dan dijalankan menggunakan bahasa program javascript. Untuk nomor 1 sampai 3 menggunakan javascript dengan proses debugging menggunakan Node.JS dalam command line. Untuk soal nomor 4 DBMS yang digunakan menggunakan MySQL dengan Express.JS (salah satu framework Node.JS) sebagai penghubung antara database dengan UI app

## Nomor 1. Penghitung uang kembalian

Nama file: nomor1.js
Bahasa pemrograman: Javascript (Node.JS)
Cara menjalankan: Pastikan sudah terinstall NodeJs dalam environment(pc/desktop), navigasi ke lokasi file ini lalu jalankan perintah kodingan ini:

```eksekusi nomor 1
node nomor1.js
```

Penjelasan:

Sebuah fungsi hitungKembalian mengambil 2 parameter input: payment(total pembayar) dan money(uang yang dibayarkan). Dalam fungsi ini, akan dihitung kembalian (exchange) dari `money - payment`, kemudian dicheck apakah kembaliannya kurang atau tidak. Jika kurang (exchange < 0), program akan print out pesan "Uangnya kurang ${exchange \* -1} lagi!". Jika mencukupi, fungsi nominalCounter akan dijalankan.

didalam nominalCounter, diambil parameter input exchange untuk dihitung lembar nominal yang akan dibentuk. Disetiap nominalnya (50000, 20000, 10000, 5000, 2000, 1000, 500), akan dihitung berapa lembar nominal yang akan dipakai, serta sisa kembaliannya. untuk jumlah per nominal, dihitung sebagai berikut:

```kodingan untuk jumlah lembar per nominal
let nominal1 = Math.floor(exchange/nominal)
```

Math.floor() adalah sebuah fungsi dari javascript yang membulatkan hasil desimal, jadi jika menggunkan fungsi ini, hasil pembagian `12000/10000` adalah `1` bukan `1.2`. sisa kembalian akan dihitung untuk nantinya akan di carilagi jumlah nominal perpembagian. sisa kembalian (currExchange) dihitung dengan cara `currExchange = currExchange % nominal`.

Hasil pencarian jumlah nominal pun kemudian akan di print out dengan cara berikut:

```console.log-ing
console.log(`${nominal1 != 0 ? `Jumlah 50000: ${nominal1} lembar\n` : ''} ... ${~ Sampai nominal-n ~}`)
```

Hasil akan diprint jika jumlah nominal yang dihitung tidak sama dengan 0, jika ada yang hasilnya 0, akan di print-out string kosong ('')

## Nomor 2. Transpose array

Nama file: nomor2.js
Bahasa pemrograman: Javascript (Node.JS)
Cara menjalankan: Pastikan sudah terinstall NodeJs dalam environment(pc/desktop), navigasi ke lokasi file ini lalu jalankan perintah kodingan ini:

```eksekusi nomor 2
node nomor2.js
```

Penjelasan:

Sebuah fungsi transpose akan menerima input array untuk nantinya akan di tukar posisi didalam array berdasarkan jumlah array didalam array tersebut.

## Nomor 3. Piramid Berpola Huruf Acak

Nama file: nomor3.js
Bahasa pemrograman: Javascript (Node.JS)
Cara menjalankan: Pastikan sudah terinstall NodeJs dalam environment(pc/desktop), navigasi ke lokasi file ini lalu jalankan perintah kodingan ini:

```eksekusi nomor 3
node nomor3.js
```

Penjelasan:

Sebuah fungsi trianglePrime akan menerima parameter input integer untuk membuat segitiga dengan pola bilangan prima. lalu ada fungsi prime(num) yang menghasilkan bilangan prima tersebut.

## Nomor 4. Simulasi Website Perpustakaan Buku

Nama folder: nomor-4a (untuk SQL file dengan penjelasan disetiap querynya), nomor-4b (untuk file-file app CRUD sederhana beserta penjelasannya)
Bahasa pemrograman: Javascript (Node.JS)
Framework yang digunakan: Bootstrap (UI), Express.JS(Back-End)
Middleware:

- Body-Parser(Parsing antara HTTP dengan elemen body dari view engine)
- express-fileupload(Untuk upload file image)
- mysql(Lebih tepatnya module, untuk bisa terkoneksi antara javascript Node.JS dengan database MySQL)

View Engine: hbs(Handlebars, sebuah view engine untuk menampilkan hasil response dari dan menampung request kepada express js)

eksekusi program:

```eksekusi nomor 4
node index
```
