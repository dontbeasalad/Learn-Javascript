// var player = {
//   username: "",
//   umur: "",
// };
// username = prompt("Masukan nama");
// alert("Selamat Datang " + username);
// umur = prompt("Kalo boleh tau. Berapa umur kamu?");
// alert(
//   "Wahh semoga di umur kamu yang ke-" +
//     umur +
//     " tahun ini, hidupmu makin berkualitas ya! "
// );
// alert(
//   "Okedeh kami sudah memasukan data kamu sebagai berikut \nNama = " +
//     username +
//     "\n Umur = " +
//     umur +
//     " tahun \nHAVE A NICE DAY! " +
//     nama
// );

// var mantan = {
//todo ini merupakan properti pada OBJECT!
//   nama: [
//     "Syifaa",
//     "Aziza",
//     "Rahmah",
//     "Qulbi",
//     "Chaca",
//     "Espat",
//     "Asa",
//     "Thaya",
//   ],
//   alasanPutus: "Terlalu Baik",

  //todo Ini Meupakan Method pada OBJECT!
//   sapa: function () {
//     return "Hi, Berikut list mantan saya" +
//       this.nama.join() +
//       " semuanya kandas karena alasan saya " +
//       this.alasanPutus +
//       " terlalu baik untuk mereka";
//   },
// };


//! MEMBUAT OBJECT LITERAL
// var mhs1 = {
//     nama : 'Muhamad Hanif',
//     nim : '11190930000048',
//     email : 'mhmmdhnf10@gmail.com',
//     jurusan : 'Sistem Informasi'
// }

// var mhs2 = {
//     nama : 'Sulthan',
//     nim : '1119000048',
//     email : 'SULTHAN@gmail.com',
//     jurusan : 'Tata Boga'
// }

//! MEMBUAT OBJECT MENGGUNAKAN FUNCTION DECLARATION
// function buatObjectMasiswa(nama, nim, email, jurusan){
//     var mhs = {};
//     mhs.nama = nama;
//     mhs.nim = nim;
//     mhs.email = email;
//     mhs.jurusan = jurusan;
//     return mhs;
// }

// var mhs3 = buatObjectMasiswa('Muhamad Hanif','111909300000048', 'mhmmdhnf10@gmail.com','Sistem Informasi')

//! MEMBUAT OBJEECT MENGGUNAKAN CONSTRUCTOR
function Mahasiswa(nama, nim, email, jurusan) {
    //var this = {};
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    //return this;
}

var mhs4 = new Mahasiswa ('Muhamad Hanif','111909300000048', 'mhmmdhnf10@gmail.com','Sistem Informasi')