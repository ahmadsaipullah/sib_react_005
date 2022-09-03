//Template Literal
var name = "Saipul"

var greeting = "Hello " + name + "!";
console.log(greeting);
console.log(typeof greeting);


//mendeklarasikan template literal menggunakan ES6;
 var nama = "ahmad";

 var greet = `Hello $(nama)!`;
 console.log(greet);
 console.log(typeof greet);

//mendeklarasikan text
//fungsi backtik untuk memberikan baris baru tanpa \n
var text =  `Selamat Belajar ES6 bersama Code Id dengan 
saya Saipul Ahmad`;
console.log(text);
console.log(typeof text);


//backtik dan penggunaan function inline
function upper(s) {
  return s.toUpperCase();
}

var who = "Teman kode";

var text = `Selamat Datang ${upper("Teman")} ${who}!`;
console.log(text);

//function literal
function kode(str) {
  var name = "kode";
  console.log(str)
}

function ipul() {
  var name = "IpuL";
  kode(`Hello From $(name)!`);
}

var name = "Global";
ipul();
