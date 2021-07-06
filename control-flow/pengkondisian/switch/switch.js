var item = prompt('Masukan nama makanan berikut : \n (cth: Nasi, Daging Babi, Susu, Junkfood)');

switch ( item ) {
    case 'nasi':
        alert('makanan ini sehat dan halal!');
        break;
    case 'babi':
        alert('makanan ini tidak sehat dan haram!');
        break;
    case 'susu':
        alert('minuman ini sehat dan halal!');
        break;
    case 'junkfood':
        alert('makanan ini tidak sehat tetapi halal!');
        break;
    default:
        alert('anda memasukan nama makanan/minuman yang salah!');
    break;
}

// var angka = parseInt(prompt('masukan angka'));

// switch (angka) {
//     case 1:
//         alert('anda memasukan angka 1')
//         break;
//     case 2:
//         alert('anda memasukan angka 2')
//         break;
//     case 3:
//         alert('anda memasukan angka 3')
//     default:
//         alert('angka yang anda masukkan salah')
//         break;


// if (angka == 1) {
//     alert ('anda memasukan angka 1')
// } else if (angka == 2) {
//     alert ('anda memasukan angka 2')
// } else if (angka == 3) {
//     alert ('anda memasukan angka 3')
// } else {
//     alert('angka yang anda masukan salah')
// }