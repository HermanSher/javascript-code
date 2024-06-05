// Object Literals
const mySym = Symbol("key1")
// console.log(typeof mySym)

const obj1 = {
    name:"john",
    "full name":"John carter",
    [mySym]:"myKey1",
    age:18,
    location:"uganda",
    email:"john@mail.com",
    isLoggedIn:false,

    lastLoginDays:["Monday","Saturday"]
}
// console.log(obj1.name);
// console.log(obj1["full name"]);
// console.log(obj1["age"])
// console.log(obj1[mySym])

//Changing value
// obj1.name = "Sam"
//freezing value means value of this object will not change
// Object.freeze(obj1)

obj1.greetUser = function(){
    console.log(`Hello ${this.name}`)
}
console.log(obj1.greetUser())