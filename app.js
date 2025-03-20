const readline = require('readline-sync'); // Import the readline-sync module

let name = readline.question("What is your name? "); // Ask the user their name

console.log("Hello " + name + " welcome!"); // Output the user's response

let data1 = readline.question("What is this kind of data: 'Tourney Time' : ");
if (data1 === "string" ){
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

let data2 = readline.question("Enter an example of a number data type: ");
data2 = Number(data2);
if (isNaN(data2)) {
  console.log("That is not a number");
} else {
    console.log("Correct!");
}

let data3 = readline.question("What is this kind of data 'true' : ");
if (data3 === "boolean") {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

let data4 = readline.question("What is the code output of: '5' + 2? ");
if (data4 === "52") {
  console.log("Correct!");
} else {
  console.log("Incorrect!");
}

let data5 = readline.question("What type of data is NaN? ");
if (data5 === "number") {
  console.log("Correct!");
} else {
    console.log("Incorrect!");
}