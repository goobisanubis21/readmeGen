const inquirer = require("inquirer");
const fs = require('fs');

// array of questions for user
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?'
            // repo project title
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
            // github username
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email adress?'
            // github email address
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description on the functionality of your project.'
            // describe each file and what program does
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Explain installation instructions.'
            // git clone 'repo URL'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?'
            // in terminal cd into project folder and type: node index.js
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Explain required contributions.'
            // this project is public and open to pull requests
        },
        {
            type: 'input',
            name: 'test',
            message: 'Testing instructions:'
            // all testing of project is done in the terminal
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose your license.',
            choices: ['Unlicense', 'MIT', 'GNU AGPLv3', 'Mozilla Public', 'Apache']
        }

    ]).then((data) => {
        const fileName = `${data.title}file.md`;
        fs.writeFile(fileName, writeToFile(data), (err) => err ? console.log(err) : console.log('Success'))
    })

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
