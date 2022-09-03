//array
//mengekstrasi array

// function printFirstAndSecondElement([first, second]) {
//   console.log("Elemen Pertama Adalah " + first + "Elemen Kedua Adalah " + second );
// }

// function printSecondAndFourthElemen([second, fourth]) {
//   console.log(`Elemet Kedua ${second} dan keempat ${fourth}`);
// }

// var array = [1,2,3,4,5];

// printFirstAndSecondElement();
// printSecondAndFourthElemen();

//objek
function printBasisInfo({ fristname, secondName, Profesional}) {
  console.log(fristname + " " + secondName + "_" + Profesional);
}

var person = {
  fristname: "Lolo",
  secondName: "Lili",
  age: 22,
  childern: 3,
  Profesional:"kode"
};

printBasisInfo(person);