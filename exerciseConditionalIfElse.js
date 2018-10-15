let nama = 'Fickry';
let arr = ['Ksatria', 'Tabib', 'Penyihir'];
let peran = arr[0];

console.log(peran)

if (peran === undefined) {
    console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`);
} else if (peran === 'Ksatria') {
    console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
} else if (peran === 'Tabib') {
    console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
} else if (peran === 'Penyihir') {
    console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
}