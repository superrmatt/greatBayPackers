let inquirer = require("inquirer");
let questions = require("./questions");


inquirer.prompt(questions).then(a);

function a(answers){
    console.log(answers);
}