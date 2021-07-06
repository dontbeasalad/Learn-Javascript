

var ulang = true;
while (ulang) {
alert('Selamat datang di game tebak angka.\nKamu punya 3 kesempatan');
    for(var i = 1; i <= 3; i++){
        //menangkap pilihan player
        var p = prompt('Kesempatan ke-' + i + '\nMasukan Angka Tebakanmu');

        // menangkap pilihan com
        //generate bilangan random 1-10
        var x = 10;
        var com = Math.floor(Math.random()* x );
        console.log(com);

        //tentukan rules
        var hasil = '';
            if ( com == p) {
                i += 5;
                hasil = 'Kamu menebak dengan benar!!';
                alert( hasil + '\nAngka yang dicari adalah ' + com);
                alert('Terima Kasih Sudah Bermain!');
            }else if ( p < com) {
                hasil = 'Terlalu rendah!!';
                alert( hasil );
            }else if (p > com) {
                hasil = 'Terlalu tinggi!!';
                alert( hasil );
            }else{
                hasil = 'Angka yang kamu masukan salah';
                alert( hasil );
            }
      
    }

confirm('Kesempatanmu Sudah Habis Mau Coba Lagi?') ;
}