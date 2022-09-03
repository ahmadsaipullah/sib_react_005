//ES

// function person(name, height) {
//   this.name = name;
//   this.height = height;
// }

// person.prototype.sayName = function() {
//   this.console.log(this.name);
// }

//ES6
// class person {
//   constructor() {
//     this.name = "Person";
//     this.height = 150;
// }
//   sayName() {
//     console.log(this.name);
//   }
// }



//   var person = class person {
//     constructor() {
//       this.name = "Person";
//       this.height = 150;
//     }
//     sayName() {
//       console.log(this.name)
//     }
//   }

//subclasses
  class person {
    constructor() {
      this.name = "Person";
      this.height = 150;
  }
    sayName() {
      console.log(this.name);
    }
  }


  class developer extends person {
    constructor(name, height) {
      super(name, height);
      this.name = "Fullstack Developer"
    }
  }
  var kode = new developer();
  kode.sayName();

