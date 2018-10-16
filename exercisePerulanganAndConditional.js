let tahunLahir = 1981;
let umurSekarang = new Date().getFullYear() - tahunLahir;
let playerHealth = tahunLahir * Math.random();
let monsterHealth = tahunLahir * Math.random();
let kodeMonster = Math.floor(Math.pow(100, Math.random()));
let arr = ['Ksatria', 'Tabib', 'Penyihir'];
let peran = arr[0];
let nama = 'Fickry';

if (nama === '') {
    nama = "kacung";
}

for (let i = 0; i < tahunLahir; i++) {
    if (i % umurSekarang == 0) {
        console.log(`${peran} ${nama} menyerang monster!`);
        monsterHealth -= umurSekarang;
    } else if (i % kodeMonster == 0) {
        console.log(`monster menyerang ${peran} ${nama}!`);
        playerHealth -= kodeMonster;
    } else if (i % umurSekarang == 0 && i % kodeMonster == 0) {
        console.log('Health keduanya bertambah');
        playerHealth += kodeMonster;
        kodeMonster += umurSekarang;
    }
}

if (playerHealth > monsterHealth) {
    console.log(`Selamat ${peran} ${nama} memenangkan pertarungan!`);
} else if (playerHealth < monsterHealth) {
    console.log(`Sayang sekali ${peran} ${nama} dikalahkan monster...`);
} else {
    console.log('DRAW!');
}
