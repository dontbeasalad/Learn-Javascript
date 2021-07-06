//! TAMPIL ANGKA 10-1
function tampilAngka(n) {
  if (n === 11) return;

  console.log(n);
  return tampilAngka(n + 1);
}
tampilAngka(1);

//!FAKTORIAL
function faktorial(n) {
  if (n === 0) {
    return 1;
  }
  console.log(n);
  return n * faktorial(n - 1);
}
faktorial(100);
