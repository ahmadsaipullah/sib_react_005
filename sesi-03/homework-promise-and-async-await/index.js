import fatch from "node-fetch";

const arrayOfWords = ['cucumber','tomatos','avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
.then(sortWord)
.then((result) => console.log(result))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWord)
.then((result) => console.log(result))
.catch(error => console.log(error))

console.log(arrayOfWords)
console.log(complicatedArray)