// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            };
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project',
        choices: ['None', 'Apache 2.0', 'MIT', 'GPL v3.0'],
        validate: (input) => {
            if (input) {
                return true;
            } else {
                console.log('Choose one of the options')
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description to your project',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Provide project description');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Which applications are needed to install for your project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Provide installation steps');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the use of this project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Project use');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'Which contributors assisted on this project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Enter contributions');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How do you test this project?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Explain how to test this project');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Provide your username');
                return false;
            };
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: input => {
            if (input) {
                return true;
            } else {
                console.log('Provide an email');
                return false;
            };
        }
    }
];
// TODO: Create a function to write README file
const writeToFile = fileContent => {
     fs.writeFile('./README.md', fileContent, err => {
        if (err) throw err;
        console.log('README complete. Check out README.md to see the output.');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answer) => {
        const fileContent = generateMarkdown(answer);
        writeToFile(fileContent)
    });
};

// Function call to initialize app
init();

// exports
module.exports = questions;
