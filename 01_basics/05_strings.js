const name = "sameer"
const repoCount = 3

//  console.log(name + repoCount + "value"). //outdated syntax

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`) 
// new syntax

const gameName = new String("sumer-pc-com")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("m"));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

const newStringOne = "   sumer  "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://ssumer.com/sumer%20singh"
// console.log(url.replace('%20', '-'))
// console.log(url.includes('sumer'))
// console.log(url.includes('jaani'))

console.log(gameName.split('-'))