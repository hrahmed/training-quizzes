# Day 1 Quiz 2

**1. Create a variable array and put the values Tom, Harry, Sally, and Janet in the array. Then write the code to print out each item in the array with a for loop, then a while loop, then a do while loop.**

YOUR ANSWER:

var myStringArray = ["Tom", "Harry", "Sally", "Janet"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
}

**2. Using the typeof operator, determine if a variable is a string, and print out "This is a string", to the console. Use the same process to determine if something is a Number, an Object, and one of the data type of your choice from the typeof.js samples.**

YOUR ANSWER:
var myStringArray = [true, "Harry", 33];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(typeof myStringArray[i]);
}


FINISHED? When you are done, commit your answer and submit a pull request back to the main repository you forked inside of a branch with your name as the name of the branch.
