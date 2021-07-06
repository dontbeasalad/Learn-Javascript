//menangkap pilihan player
var tanya = true;
while ( tanya ) {
    var p = prompt('Selamat Datang di Game Suit Jepang, Lawan Kamu Adalah Komputer \nSilahkan pilih suitanmu : gunting, batu, kertas');
    //menangkap pilihan computer
    //generate bilangan random
    var comp = Math.random();
    if( comp < 0.33 ){
        comp = 'gunting';
    } else if ( comp >= 0.33 && comp < 0.66) {
    comp = 'batu' ;
    } else{
        comp = 'kertas';
    } 
    //menentukan rules
    var hasil = '';
    if ( p == comp) {
        hasil = 'SERI!';
    } else if (p == 'gunting') {
        if (comp == 'batu') {
            hasil = 'kamu KALAH!';
        } else
            hasil = 'kamu MENANG!';
    } else if (p == 'batu') {
        if (comp = 'gunting') {
            hasil = 'kamu MENANG!';
        } else{
            hasil  = 'kamu KALAH!';
        }
    } else if (p == 'kertas') {
        if (comp = 'batu') {
            hasil = 'kamu MENANG!';
        } else{
            hasil  = 'kamu KALAH!';
        }
    } else{
        hasil = 'kamu memasukan pilihan yang salah!';
    }

    //tampilkan hasilnya
    alert('kamu memilih ' + p + ' komputer memilih ' + comp + '\nmaka ' + hasil );

    tanya = confirm('lagi?');
}