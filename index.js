// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generatorMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions =[
    {
      type: 'input',
      message: 'What is your project Title?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'What is the Description of your app?',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'Table of Contents?',
      name: 'Contents',
    },
    {
      type: 'input',
      message: 'What License are you using?',
      name: 'Licnse',
    },
    {
      type: 'input',
      message: 'What is your Usage',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'Tests',
      name: 'Tests',
    },
    {
      type: 'input',
      message: 'Questions?',
      name: 'Questions',
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'Username',
    },
    {
      type: 'input',
      message: 'What is your Email',
      name: 'Email',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data)  {
    fs.writeToFile((fileName),data)
   

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        fs.writeFileSync("README.md" , generatorMarkdown(data));
        console.log(data);
    })
}

// Function call to initialize app
init();
