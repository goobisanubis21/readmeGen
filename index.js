const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user
const questions = [

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: 'What is the name of your project?'
            },
            {
                type: 'input',
                name: 'username',
                message: 'What is your GitHub username?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is your email adress?'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please enter a description on the functionality of your project.'
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose your license',
                choices: ['a', 'b', 'c', 'd']
            }

        ]).then((data) => {
            const {title, username, email, description, license} = questions.data
            const fileName = `${title}file.md`;
            fs.writeFile(fileName, writeToFile(data), (err) => err ? console.log(err) : console.log('Success'))
        })
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
