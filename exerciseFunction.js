// Tugas 1
function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut());


// Tugas 2
function calculateMultiply(a, b) {
    return a * b;
}

let num1 = 5;
let num2 = 6;

let hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian);


// Tugas 3
function processSentence(a, b, c, d) {
    return `Nama saya ${a}, umur saya ${b}, alamat saya di ${c}, dan saya punya hobby yaitu ${d}!`;
}

let name = "Agus";
let age = 30;
let address = "Jln. Malioboro, Yogjakarta";
let hobby = "gaming";

let fullSentence = processSentence(name, age, address, hobby);
console.log(fullSentence);
