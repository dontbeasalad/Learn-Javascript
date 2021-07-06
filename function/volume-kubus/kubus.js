
alert('Selamat Datang di penghitung volume 2 kubus');

var ulang = true;
while (ulang) {

    var a = prompt('Masukan sisi kubus A');
    var b = prompt('Masukan sisi kubus B');
    var hasil = a*a*a + b*b*b;
    alert('Kubus A panjang sisinya ' +a+ '\nKubus B panjang sisinya ' + b + '\nMaka gabungan volume dari kedua kubus tersebut adalah ' +  hasil);

    confirm('Mau coba lagi gak?');
ulang++;
}