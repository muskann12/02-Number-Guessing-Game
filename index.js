#!usr bin/env node
import inquirer from "inquirer";
console.log("heylo im muskan nisar");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Enter your guess number(Number Limit from 1 to 5):",
    },
]);
if (answer.userGuessNumber === randomnumber) {
    console.log(" congrats! you guessed a crorrect number");
}
else {
    console.log("sorry you guessed a wrong number");
}
