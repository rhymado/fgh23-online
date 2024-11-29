// Deklarasi Variabel
// Keyword namaVariabel
var satu;
let nama_lengkap;
let namaLengkap;
let NamaLengkap;
let presidenIndonesiaTerpilih;
let satuJutaRupiah;
// const tiga

var cars;
cars = "Honda";
function Cars() {
  var cars = "Toyota";
  console.log(cars);
}
function Cars2() {
  var cars = "Daihatsu";
  console.log(cars);
}
{
  var color = "Red";
}
cars = "Mercedes";
color = "Blue";
// console.log(cars);
// Cars();
// Cars2();
// console.log(color);

// const animal
// animal = "Lion"
const animal = "Lion";
// let animal
// {
//   console.log(animal);
// }
{
  const animal = "Crocodile";
}
// console.log(animal);

// string -> kumpulan karakter(huruf/angka)
let kota = "Bekasi";
// number -> angka
let age = 25;
// boolean -> true atau false
let isMarried = false;
// undefined
let a;
// null
let result = null;

// object -> kumpulan data
// array => kumpulan data, berurutan,
// diwakili dengan index (urutan yg start dari 0)
// penulisannya menggunakan []
// pemanggilan elemen => namaArray[index]
// object => kumpulan data, tidak berurutan
// diwakili dengan key
// penulisannya menggunakan {}
// pemanggilan elemen
// 1. namaObject.namaKey
// 2. namaObject["namaKey"]

let hobbies = ["Hiking", "Singing", "Watching"];
// console.log(hobbies[2]);
let person = {
  name: "Agus",
  age: 23,
  isMarried: false,
};
// console.log(person.name);
// console.log(person["name"]);

let persons = [
  {
    name: "Agus",
    gender: "M",
  },
  {
    name: "Tanti",
    gender: "F",
  },
];
// persons[1].name

// type checking
// typeof namaVariabel

// console.log(typeof kota);
// console.log(typeof hobbies);
// console.log(typeof persons);

// instance checking
// namaVariabelAnak instanceof namaVariabelInduk

function C() {}
function D() {}

const o = new C();
// new digunakan untuk membuat instance dari suatu object

// console.log(o instanceof C);
// console.log(o instanceof D);

function Car(brand, color) {
  this.brand = brand;
  this.color = color;
  this.getColor = function () {
    console.log(this.color);
  };
}
const Honda = new Car("Honda", "Red");
// Honda.getColor();
// Honda.getBrand();

if (Honda instanceof Car) {
  //   Honda.getColor();
}

// if else
// if (kondisi) {kondisi true} else {kondisi false}
// kondisi bisa berupa boolean atau berupa operasi komparasi
const x = 1;
const y = 2;

// if (x > y) {
//   console.log("x lebih besar dari y");
// } else {
//   console.log("x lebih kecil dari y");
// }

// const success = false;
// if (success) {
//   console.log("Congratulation");
// } else {
//   console.log("Try Again");
// }

// ternary operator
// penulisan singkat dari if else
// kondisi ? kondisi true : kondisi false

// success ? console.log("Congratulation") : console.log("Try Again");

// short circuit logic
// lebih singkat daripada ternary
// jika perintah hanya ada ketika true atau ketika false
// kondisi && kondisi true
// kondisi || kondisi false

const b = "1";
// typeof b == "number" || console.log("nilai b harus berupa number");

// for loop
// for (inisiasi;kondisi;perubahan){}

// 1 -> 10
let i = 10;
for (i; i >= 1; i = i * 0.5) {
  console.log(i);
}

// while loop
// while (kondisi){}
console.log("while")
// 5 -> 10
let j = 11;
while (j <= 10) {
  console.log(j);
  j = j + 1; //j++
}

// do while loop
// do {} while(kondisi)
// jika program minimal jalan 1 kali, gunakan do while
console.log("do while")
let k = 100;
do {
  console.log(k);
  k = k + 1;
} while (k <= 10);
