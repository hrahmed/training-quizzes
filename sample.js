var simpleM = require("./simpleModule");
console.log ("This is " + simpleM.doThis());
console.log ("This is " + simpleM.doThat());

var multiply = simpleM.didStuff();

var arrayLength = multiply.length;
console.log("doStuff result is: " + multiply[0]*multiply[1]);

			 