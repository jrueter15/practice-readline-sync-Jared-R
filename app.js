const readline = require('readline-sync'); // Import the readline-sync module

let name = readline.question("What is your name? "); // Ask the user their name

console.log("Hello " + name + " welcome!"); // Output the user's response

let data1 = readline.question("What is this kind of data: 'Tourney Time' : ");
console.log(data1);
if (data1 === "string" ){
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

let data2 = readline.question("Enter an example of a number data type: ");
console.log(data2);
data2 = Number(data2);
if (isNaN(data2)) {
  console.log("That is not a number");
} else {
    console.log("Correct!");
}

let data3 = readline.question("What is this kind of data 'true' : ");
console.log(data3);
if (data3 === "boolean") {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

let data4 = readline.question("What is the code output of: '5' + 2? ");
console.log(data4);
if (data4 === "52") {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

let data5 = readline.question("What type of data is NaN? ");
console.log(data5);
if (data5 === "number") {
  console.log("Correct!");
} else {
    console.log("Incorrect!");
}