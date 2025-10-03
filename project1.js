/*
    Program kalkulator Sederhana

    Req :
        - Menggunakan Variable ES6
        - Menggunakan Arrow Function 
        - Menggunakan Operator => + , - , * , / , ** , %

*/

let a = 10;
let b = 20

const tambah = (a , b) => a + b

const kurang = (a , b) => a - b

const kali = (a , b) => a * b

const bagi = (a , b) => a / b

const modulus= (a , b) => a % b

const pangkat = (a , b) => a ** b

console.log(`a = ${a}\nb = ${b}\n`);


console.log("tambah(a , b)")
console.log(`log : Penjumlahan ${a} + ${b} = ${tambah(a,b)}\n`)

console.log("kurang(a, b)")
console.log(`log : Pengurangan ${a} - ${b} = ${kurang(a,b)}\n`)

console.log("kali(a , b)")
console.log(`log : Perkalian ${a} * ${b} = ${kali(a,b)}\n`)

console.log("bagi(a , b)")
console.log(`log : Pembagian ${a} / ${b} = ${bagi(a,b)}\n`)

console.log("pangkat(a , b)")
console.log(`log : Perpangkatan ${a} ^ ${b} = ${pangkat(a,b)}\n`)

console.log("modulus(a , b)")
console.log(`log : modulus ${a} % ${b} = ${modulus(a,b)}\n`)


