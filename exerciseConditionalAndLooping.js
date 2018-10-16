console.log('===============');
console.log('Bilangan GANJIl GENAP');
console.log('===============');

for (let i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        console.log(`${i} adalah bilangan GANJIL`)
    } else {
        console.log(`${i} adalah bilangan GENAP`);
    }
}

console.log('===============');
console.log('Kelipatan 3 pada Pertambahan 2');
console.log('===============');

for (let i = 1; i <= 100; i += 2) {
    if (i % 3 == 0) {
        console.log(`${i} kelipatan 3`);
    }
}

console.log('===============');
console.log('Kelipatan 6 pada Pertambahan 5');
console.log('===============');

for (let i = 1; i <= 100; i += 5) {
    if (i % 6 == 0) {
        console.log(`${i} kelipatan 6`);
    }
}

console.log('===============');
console.log('Kelipatan 10 pada Pertambahan 9');
console.log('===============');

for (let i = 1; i <= 100; i += 9) {
    if (i % 10 == 0) {
        console.log(`${i} kelipatan 10`);
    }
}