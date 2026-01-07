const accountId = 101;
let accountEmail = "admin@gmail.com";
var accountPassword = "1234";
accountCity = "Lucknow";
let accoutnState;

// accountId = 192; //Assignment to constant variable not allowed
accountEmail = "root@gmail.com";
accountPassword = "0987";
accountCity = "Jharkhand";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accoutnState]);

/*
prefer not to use var because of issue in block/functional scope
*/