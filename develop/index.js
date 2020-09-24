const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Choices = require('inquirer/lib/objects/choices');
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
        type: 'input',
        message: "License: ",
        name: "license",
        Choices: ["MIT", "GNUv3.0", "MPL2.0", "Apache 2.0", "GPL 3.0", "BSD 3", "Unlicensed"]
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
    fs.writeFile('sampleREADME.md', generateMarkdown(data), (err) => {
        if (err) throw err;
        console.log("File created");
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((data) => writeToFile(data))
        .catch((err) => console.log(err)); 
}

// function call to initialize program
init();

