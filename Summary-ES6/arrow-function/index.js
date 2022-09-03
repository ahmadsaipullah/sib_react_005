//belajar arrow function

const hitung = function(angka1, angka2) {
  return angka1 + angka2;
};

//versus
const hitung1 = (angka1, angka2) => {
  return angka1 + angka2;
};
//sederhanakan
const hitung2 = (angka1, angka2) => angka1 + angka2;

//2 part dari syntax;
//const hitung = ()
//=> ()





//menyederhanakan
var a = [1,2,3,4,5];
a = a.map( y => y*2);
console.log(a);



//this
var akustik = "dashboard";

function playing(){
  let vokalis = ["kangen band"," superman is dead ","dewa19"];
  console.log("Kita akan bermain musik " + this.akustik);
  console.log("Kita akan bermain musik " + vokalis);
}
playing();
