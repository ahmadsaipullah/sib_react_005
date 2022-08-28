const animals = [
  {name: "fluffy", species: "cat"},
  {name: "carlo", species: "dog"},
  {name: "nemo", species: "fish"},
  {name: "hamilton", species: "dog"},
  {name: "dori", species: "fish"},
  {name: "ursa", species: "cat"}
];

let names = [];
for (let i=0; i<animals.length; i++) {
  names.push(animals[i].name);
}
console.log(names);

let fish = animals.filter((animal)=> animal.species === 'fish');