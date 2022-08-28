let orders = [
  { tottal: 325},
  { tottal: 512},
  { tottal: 128},
  { tottal: 32}
];

let total = 0;
for (let i=0; i<orders.length; i++) {
  total = total + orders[i].total;
}
console.log(total);

//reduce menggunakan 2 parameter
let tottal = orders.reduce((total, order)=> total + order.tottal,0);
console.log(tottal);