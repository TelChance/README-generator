const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the title of your project?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does your project use?',
        choices: ['None', 'Apche 2.0', 'MIT', "GPL v3.0"],
        validate: licenseInput = () => {
            if (licenseInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a project description.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What steps are needed to install your project?',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'What is the use of your project?',
        validate: learnInput => {
            if (learnInput) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'contribution',
        messgae: 'What guidlines do others need to follow to be bale to contribute?',
        validate: constributionsInput => {
            if (constributionsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'askMe',
        message: 'What is your github username so others can reach out to you for questions?',
        validate: askMeInput => {
            if (askMeInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your email so there is another way to reach you?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                return false;
            }
        }
    }
];


const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./generateREADME.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true
            });
        });
    });
};


function init() {
    inquirer.prompt(questions)
    .then(function(anwser) {
    var fileContent = generateMarkdown(anwser);
    writeToFile(fileContent)
    });
}

init();

module.exports = questions;