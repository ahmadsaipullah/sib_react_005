//objeck literal .notaion
const user = {};
user.name = "ahmad saifullah";
user.handle = "@saipul";
user.location = "jakarta indonesia";

//destructuring function result
const getUser = () => {
  return {

nama : "ahmad saifullah",
handle : "@saipul",
location : "jakarta indonesia"

  };
}

//extraction
const {nama, handle, location} = getUser();
console.log(nama, handle, location);

//destructing array
const csv = "1997,food,f350,must sell!";

const [year,make,model,description] = 
csv.split(".");


//aliasing objeck propertis 
const user = {
  n:'ahmad saifullah',
  n:'@saipul',
  l:'jakarta, indonesia'

}
//extraction
// const {n: nama, h:handle, l:location} = user;
// console.log(nama, handle, location);
  