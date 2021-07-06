//!LATIHAN PENGELOLAAN ANGKOT

//Membuat object Angkot 

//fungsi constructor
function Angkot(supir, trayek, penumpang, kas ) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang)
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if ( this.penumpang.length === 0 ){
            alert('Penumpang tersebut belum naik bro');
            return false;
        } 
        for( var i = 0; i < this.penumpang.length; i++){
               if (this.penumpang[i] == namaPenumpang){
                   this.penumpang[i] = undefined;
                   this.kas += bayar;
                   return this.penumpang;
               }
        }
    }
}

var angkot1 = new Angkot('Muhamad Hanif', ['Ciputat' , 'Cipete'], [], 0);
var angkot2 = new Angkot('Arief Muhamad', ['Lebak Bulus' , 'Pondok Kelapa'], [], 0);