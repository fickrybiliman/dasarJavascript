// app untuk cek stock obat

let namaObat = ['Dekongestan', 'Asam Mefenamat', 'Antasida Doen', 'Ambroxol', 'Paracetamol'];
let stock = [100, 50, 70, 35, 17];

function cekStockUnder50(s) {
   for (let i = 0; i < s.length; i++) {
      if (s[i] < 50) {
         console.log(`Stock obat ${namaObat[i]} adalah ${stock[i]} keping, persiapkan purchasing untuk menambah stock obat ${namaObat[i]}.`);
      }
   }
}

cekStockUnder50(stock);