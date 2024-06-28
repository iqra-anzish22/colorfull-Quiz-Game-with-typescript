#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("\n \t Welcome to My  Advanture Quiz Game:\n"));
console.log("=".repeat(50));
console.log(chalk.blue("you are required to gain maximum 4 points  for the winner:"));
let points = 0;
// q1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: chalk.magenta("\n Typescript is a supperset off?"),
        type: "list",
        choices: ["Python", "C++", "Java", "JavaScript"]
    }
]);
if (question1.one == "JavaScript") {
    console.log(chalk.greenBright("your answer is Correct!"));
    points++;
}
else {
    console.log(chalk.redBright("Incorrect answer"));
}
// q2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: chalk.magenta("Who is the founder of Microsoft?"),
        type: "list",
        choices: ["Elon musk", "Bilgates", "Mark", "Ali"]
    }
]);
if (question2.two == "Bilgates") {
    console.log(chalk.greenBright("your answer is Correct!"));
    points++;
}
else {
    console.log(chalk.redBright("Incorrect answer"));
}
// q3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: chalk.magenta("Capital of pakistan?"),
        type: "list",
        choices: ["Karachi", "Punjab", "Islamabad", "KPK"]
    }
]);
if (question3.three == "Islamabad") {
    console.log(chalk.greenBright("your answer is Correct!"));
    points++;
}
else {
    console.log(chalk.redBright("Incorrect answer"));
}
// q4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: chalk.magenta("who is the current governor of sindh?"),
        type: "list",
        choices: ["Ahmed", "Hamza", "Kamran tessori", "Ali"]
    }
]);
if (question4.four == "Kamran tessori") {
    console.log(chalk.greenBright("your answer is Correct!"));
    points++;
}
else {
    console.log(chalk.redBright("Incorrect answer"));
}
// q5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: chalk.magenta("In which language you are hearing my voice?"),
        type: "list",
        choices: ["English", "Sindhi", "Urdu", "Punjabi"]
    }
]);
if (question5.five == "Urdu") {
    console.log(chalk.greenBright("your answer is correct!"));
    points++;
}
else {
    console.log(chalk.redBright("Incorrect answer"));
}
if (points >= 4) {
    console.log(chalk.greenBright("Congratulations!!"));
    console.log(chalk.green(`your points: ${points}`));
}
else {
    console.log(chalk.red("you loss! try next time"));
    console.log(chalk.red(`your points: ${points}`));
}
