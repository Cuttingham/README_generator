const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./markdownTemplate');


// THEN a high-quality, professional README.md is generated with the title of my
// project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
// name
// desc
//instructions
//usage
//contribution
//test
//license
//username
//email address
//







]

function askQuestions(){
    inquirer.prompt (questions)
    .then(function(answers){
        writeToFile("README.md",createReadMe(answers))
    });
}
askQuestions();