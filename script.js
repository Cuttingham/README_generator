const inquirer = require('inquirer');
const fs = require('fs');
const createReadMe = require('./markdownTemplate');


// THEN a high-quality, professional README.md is generated with the title of my
// project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
    // name
        type:'input',
        name:'title',
        message:'What is the title of your project? (Required)'
    },
    {
    // desc
        type:'input',
        name:'description',
        message:"Please give a short description of your project! (Required)"
    },
    {
        //instructions
        type:'input',
        name:'installation',
        message:"Please say how you install your project! (Required)"
    },
    {
        //usage 
        type:'input',
        name:'usage',
        message:'How do you use this project? (Required)'
    },
    {
        //constribution
        type:'input',
        name:'contribution',
        message:"How do you contribute to this project?(Required)"
    },
    {   
        //test
        type:'input',
        name:'testing',
        message:'How do you test this project?(Required)'
    },
    {   
        //license
        type:'checkbox',
        name:'license',
        message:"Please choose a license for your project! (Required)",
        choices:['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'Common-Development-and Distribution', 'None'],
    },
    {
        //github
        type:'input',
        name:'github',
        message:'Please enter your Github username!(Required)',
    },
    {
        //email 
        type:'input',
        name:'email',
        message:'Please enter in your contact email address!(Required)'
    }
]

function askQuestions(){
    inquirer.prompt (questions)
    .then(function (answers){
        fs.writeFile("generatedREADME.md",createReadMe(answers),(err) =>{
            if(err){
                console.log("Something has gone horribly wrong! Please start again!");
            }
        }
        );
    });
}
askQuestions();