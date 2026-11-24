/*primitive
7 types : string, number, boolean, null, undefined, symbol, bigInt */

const score = 100
const scoreValue = 100.3

const isLoggedsIn = false
const outsideTemp = null
let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)  // false

const bigNumber = 35454657648375462n

/* reference ( non primitive)
 array, objects, functions */

 const heros = ["shaktimaan", "naagraj", "spiderman"]
 let myObj = {
    name: "sameer",
    age: 22,
 }

 const myFunction = function(){
    console.log("hello world");
 }

 console.log(typeof myFunction)  // object

/*  knowing datatypes:
null = object 
bigNumber = bigint
id,anotherid = symbol
heros = object
myFunction = function
boolean = boolean */