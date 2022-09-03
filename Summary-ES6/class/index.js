//pengenalan mendeklarasikan variabel

//let
var a = 2;
{
  let a = 3;
  console.log(a);
  a = 6;
  console.log(a);
}
console.log(a);

//const
{
  const b = 4;
  console.log(b);

  b = 5;
}
  function f() {
    var x = 1;
    let y = 2;
    const z = 3;
  
  {
    var x = 100;
    let y = 200;
    const z = 300;
    console.log(" X dalam block scope adalah", x);
    console.log(" Y dalam block scope adalah", y);
    console.log(" Z dalam block scope adalah", z);
  }
  console.log(" X dalam block scope adalah", x);
  console.log(" Y dalam block scope adalah", y);
  console.log(" Z dalam block scope adalah", z);
}