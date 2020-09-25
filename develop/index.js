const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "Project title: ",
        name: "title"
    },

    {
        type: 'input',
        message: "Description: ",
        name: "description"
    },

    {
        type: 'input',
        message: "Instructions for installation: ",
        name: "installation"
    },

    {
        type: 'input',
        message: "How to use: ",
        name: "usage"
    },
   
    {
        type: 'list',
        message: "License: ",
        name: "license",
        choices: ["MIT", "Apache-2.0", "Unlicensed"]
    },
   
    {
        type: 'input',
        message: "License URL: ",
        name: "license"
    },
   
    {
        type: 'input',
        message: "Guidelines for contribution: ",
        name: "contribution"
    },
   
    {
        type: 'input',
        message: "Test instructions: ",
        name: "tests"
    },

    {
        type: 'input',
        message: "Github username: ",
        name: "user"
    },

    {
        type: 'input',
        message: "Email address: ",
        name: "email"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("File created");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile('README.md', generateMarkdown(data)))
        .catch((err) => console.log(err)); 
}

// function call to initialize program
init();

