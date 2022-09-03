//Export

export function foo() {
  //.......
}

export var kode = 42;

var bar = [1,2,3];
export { bar };

//cara lain:

function foo() {
  //......
}

var kode = 44;
var bar = [1,2,3];

export {foo, kode, bar};

//rename

function foo() {
  //......
}

export {foo as kode};

var kode = 42;
export {kode};
kode = 100;
