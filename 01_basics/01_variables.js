const accountID = 144553
let accountEmail = "sam@gmail.com"
var accountPassword =  "12345"
accountCity = "jaipur"
let accountState;

// accountID = 2  // not allowed

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "bengaluru"

console.log(accountID);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([ accountEmail, accountPassword, accountCity, accountState])



