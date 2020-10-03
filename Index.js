const { writeFile } = require('fs');
const fs = require('fs');

const inquirer = require('inquirer');

// const { writeFile } = require('./generate-site.js');

const generatePage = require('./src/page-template.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'MID',
            message: 'What is the managers Employee ID?'
        },
        {
            type: 'input',
            name: 'mEmail',
            message: 'What is the managers Email?'
        },
        {
            type: 'input',
            name: 'Office',
            message: 'What is the managers Office Number?'
        },
        {
            type: 'checkbox',
            name: 'Employee',
            message: 'Which type of Employee would you like to add?',
            choices: [
                'Engineer',
                'Intern'
            ]
        }
    ]);
};

const promptEmployee = employeeData => {
    if (!employeeData.employee) {
        employeeeData.employee = [];
    }

    console.log(`

    =================
    Add a New Employee
    =================
    `);
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'Employee',
            message: 'Which type of Employee would you like to add?',
            choices: [
                'Engineer',
                'Intern'
            ]
        }
    ])
}

promptManager()
    .then(promptEmployee)
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })