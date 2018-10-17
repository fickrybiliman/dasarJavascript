function dataHandling2(arr) {
   arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung");
   arr.splice(4, 1, "Pria", "SMA Internasional Metro");
   console.log(arr);
   
   let bulan = arr[3].split('/')[1];
   switch (bulan) {
      case "01":
         bulan = "Januari";
         break;
      case "02":
         bulan = "Februari";
         break;
      case "03":
         bulan = "Maret";
         break;
      case "04":
         bulan = "April";
         break;
      case "05":
         bulan = "Mei";
         break;
      case "06":
         bulan = "Juni";
         break;
      case "07":
         bulan = "Juli";
         break;
      case "08":
         bulan = "Agustus";
         break;
      case "09":
         bulan = "September";
         break;
      case "10":
         bulan = "Oktober";
         break;
      case "11":
         bulan = "November";
         break;
      case "12":
         bulan = "Desember";
         break;
      default:
         bulan = "Bulan antara 01 - 12";
         break;
   }
   console.log(bulan);

   let ttlSort = arr[3].split('/').sort((a, b) => b - a); 
   console.log(ttlSort);

   /* string replace method
   let ttlReplace = arr[3].replace(/[/]/g, '-');
   */
   let ttlStrip = arr[3].split('/').join('-');
   console.log(ttlStrip);

   let nameSlice = arr[1].slice(0, 15);
   console.log(nameSlice);
}

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * [1989, 21, 05]
 * 21-05-1989
 * Roman Alamsyah
 */