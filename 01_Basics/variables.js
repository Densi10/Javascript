const accountId = 1234
let accountName = "Demo"
var accountEmail = "demo123@gmail.com"
accountCity = "surat"
let accountState = "Gujarat";

// accountId = 2   It gives Constant error Constant can't change
accountName = "newDemo"
accountEmail = "newD123@gmail.com"
accountCity = "vadodara"

/* 
 prefer not to use Var 
 Because3 of blockScope and function scope Issue 
*/

/* 
 Let resolve the issue that occurs while using var 
  so prefer let for declaring Variables 
*/

console.table([accountId,accountEmail,accountName,accountCity,accountState]);