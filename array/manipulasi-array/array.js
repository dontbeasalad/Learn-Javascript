//!MANIPULASI ARRAY

//TODO MENAMBAH ISI ARRAY
// var arr = [];
// arr[0] = "hanif";
// arr[1] = "galih";
// arr[2] = "upin";
// console.log(arr);

//todo MENGHAPUS ISI ARRAY
// var arr = ["hanif", "GALIH"];
// arr[1] = undefined;
// console.log(arr);

//todo MENAMPILKAN ISI ARRAY
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];

// for (var i = 0; i < arr.length; i++) {
//   console.log("Mahasiswa ke- " + (i + 1) + " " + arr[i]);
// }

//todo METHOD PADA ARRAY
//TODO 1. JOIN (MENGGABUNGKAN ARRAY)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
// console.log(arr.join(" - "));

//TODO 2.PUSH (MENAMBAHKAN ARRAY BAGIAN AKHIR)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
// arr.push("BANYU", "OKTA");
// console.log(arr.join(" - "));

//TODO 3.POP (MENGILANGKAN ARRAY BAGIAN AKHIR)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
// arr.pop();
// console.log(arr.join(" - "));

//TODO 4. UNSHIFT (MENAMBAH ARRAY BAGIAN AWAL)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
// arr.unshift("doddy");
// console.log(arr.join(" - "));

//TODO 5. SHIFT (MENGHILANGKAN ARRAY BAGIAN AWAL)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
// arr.pop();
// console.log(arr.join(" - "));

//TODO 6. SPLICE (MENYISIPKAN ELEMEN ARRAY)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
//splice(indexAwal, maudihapusberapa, elemenbaru1, elemen baru2,)
// arr.splice(1, 2, "mamang", "sulaiman");
// console.log(arr.join(" - "));

//todo 7 SLICE (MENGIRIS SEBUAH ARRAY MENJADI ARRAY YG BARU)
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
//slice(awal,akhir)
// var arr2 = arr.slice(1, 3);
// console.log(arr2.join(" - "));

//TODO 8 FOREACH (LOOPING)
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var cetak = function (e) {
//   console.log(e);
// };
// angka.forEach(cetak);
// var arr = ["hanif", "GALIH", "mawang", "sudarsono"];
// arr.forEach(function (e, i) {
//   console.log("Mahasiswa ke- " + (i + 1) + " adalah : " + e);
// });

//TODO 9. MAP (LOOPING MENGEMBALIKAN ARRAY)
// var angka = [1, 2, 3, 4, 5, 6, 7, 8];
// var angka2 = angka.map(function (e) {
//   return e * 3;
// });
// console.log(angka2.join(" - "));

//TODO 10.SORT (MENGURUTKAN ARRAY)
// var angka = [1, 7, 10, 30, 6, 2, 4, 5, 3, 8];
// console.log(angka.join(" - "));
// angka.sort(function (a, b) {
//   return a - b;
// });
// console.log(angka.join(" - "));

//TODO 11. FILTER (MENCARI ELEMEN PADA ELEMEN, MENGEMBALIKAN 2 NILAI)
// var angka = [1, 7, 10, 30, 6, 2, 4, 5, 3, 8];
// var angka2 = angka.filter(function (x) {
//   return x > 10;
// });

// console.log(angka2);

//TODO 12. FIND (MENCARI ELEMEN PADA ELEMEN, MENGEMBALIKAN 1 NILAI)
// var angka = [1, 7, 10, 30, 6, 2, 4, 5, 3, 8];
// var angka2 = angka.find(function (x) {
//   return x > 7;
// });

// console.log(angka2);
