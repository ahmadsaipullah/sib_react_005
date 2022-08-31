class employee { //membuat class
  constructor (name) { //mendeklarasikan methode
    this._name = name; //membuat class untuk memanggil methode name
  }
  doWork() { //methode doWork
    return "Complete!";
  }
  getName() { //methode getname
    return this._name;
  }
}
//mendefinisikan class
let scott = new employee("Scoot Moss");
console.log(scott.getName()); //Scoot Moss
console.log(scott.doWork()); //Complete!