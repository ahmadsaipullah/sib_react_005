//cara lama
function greeting(name, greeting) {
  name = typeof name !== "undefined" ? name : "student";
  greeting = typeof greeting !== "undefined" ? greeting : "welcome code";
  
  return '$(greeting) $(name)!';
}

//cara lebih cepat
function greet(name = "student", greeting = "welcome kode") {
  return '$(greeting) $(name)!';
}

//default function dengan arrow function
let func = (a, b = 10) => a + b;

func(20); //hasil 20 + 10 = 30;
func(20, 50); //hasil 20 + 50 = 70;

let  notWorking = (a = 10, b) => a + b;

notWorking(20); //NaN