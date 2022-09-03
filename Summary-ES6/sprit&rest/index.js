//contoh Sprit dan rest

var [c, ...n] = [1,2,3,4,5]; // n -> [2,3,4,5]

var c = 1;
    n = [2,3,4,5]; //rest


//contoh 
function foo(x,y,...z) {
  console.log(x,y,z);
}

foo(1,2,3,4,5);

//contoh
var params = ["Hello", true, 7];
var other = [1,2, ...params, 3];

var other = [1,2].concat[params];

//contoh
var a = [2,3,4];
var b = [1, ...a, 5];
console.log(b);