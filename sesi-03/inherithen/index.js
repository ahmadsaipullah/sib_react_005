//kerangka atau induk utama
class person {
  constructor(name) {
    this._name = name;
  }
  getName() {
    return this._name;
  }
}

//Turunan dari induk pertama atau kerangka
class employee extends person {
  
  duWork() {
    return this._name + "is working"
  }
  
}

//mendeklarasikan class
let scott = new employee("scoot moss done")
//output
console.log(scott.getName());
console.log(scott.duWork());



//Turunan dari induk pertama atau kerangka
class employee2 extends person {
  constructor(name, tittle) {
    super(name); //methode super / leluhur
    this._tittle = tittle
  }
  getTittle() {
    return this._name + " is " + this._tittle
  }
}

//mendeklarasikan class
let scott2 = new employee2("scott moss","berhasilGetTittle");
//output
console.log(scott2.getName());
console.log(scott2.getTittle());



