// //filter:
// var values = [1,60,34,30,20,7];

// function lessThan20(val) {
//   return val < 20;
// }

// var valueLessThan20 = values.filter(lessThan20);
// console.log(valueLessThan20);

// //find:
// var people = [
//   {name: "Saipul", age: 23},
//   {name: "ahmad", age: 22},
//   {name: "ipul", age: 21},
//   {name: "ahmad saipullah", age: 20},
//   {name: "Saipul ahmad", age: 19}
// ];

// function teenager(person) {
//   return person.age > 20 && person.age < 20;
// }

// var firstTeenager = people.find(teenager);
// console.log("Siapa dia dan dia adalah... ", firstTeenager);

// //every:
// var people = [
//   {name: "Saipul", age: 23},
//   {name: "ahmad", age: 22},
//   {name: "ipul", age: 21},
//   {name: "ahmad saipullah", age: 20},
//   {name: "Saipul ahmad", age: 19}
// ];

// function teenager(person) {
//   return person.age > 20 && person.age < 20;
// }

// var firstTeenager = people.every(teenager);
// console.log("Siapa dia dan dia adalah... ", firstTeenager);

//foreach:

var colors = ["red", "green", "blue"];

function print(val) {
  console.log(val);
}

colors.forEach(print);

//map: 
var colors = ["red", "green", "blue"];

function kapital(val) {
  return val.toUpperCase();
}
 var warnaKapital = colors.map(kapital);
 console.log(warnaKapital);

 //reduce:
 let foods = [800, 200, 100, 300];
 let total = foods.reduce(function(sum, item){
    return sum + item;
 });

 console.log(total);
 

