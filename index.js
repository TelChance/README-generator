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
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for this project?',
        validate: motivationInput => {
            if (motivationInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you build this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Problems',
        message: 'What problem does it solve?',
        validate: problemsInput => {
            if (problemsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input', 
        name: 'Learn',
        message: 'What did you learn?',
        validate: learnInput => {
            if (learnInput) {
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
        console.lof('anwser');
    var fileContent = generateMarkdown(anwser);
    writeToFile(fileContent)
    });
}

init();

module.exports = questions;