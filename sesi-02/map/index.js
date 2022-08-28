const animals = [
  {name: "Fluffy", species: "cat"},
  {name: "Carlo", species: "Dog"},
  {name: "Nemo", species: "Fish"},
  {name: "Hamilton, species:", species: "Dog"},
  {name: "Dory", species: "Fish"},
  {name: "Ursa", species: "Cat"}
];

let names = [];
for (let i=0; i<animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);
//atau kita bisa menggunakan method map berikut
//let names = animals.map((animal)=> animal.name);
//console.log(names);