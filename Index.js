// const { writeFile } = require('fs');
const fs = require('fs');

const inquirer = require('inquirer');

const { writeFile } = require('./generate-site.js');

const generatePage = require('./src/page-template.js');

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: 'What is the managers name?'
        },
        {
            type: 'input',
            name: 'mId',
            message: 'What is the managers Employee ID?'
        },
        {
            type: 'input',
            name: 'mEmail',
            message: 'What is the managers Email?'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers Office Number?'
        }
    ]);
};

const promptEmployee = teamData => {
    if (!teamData.employee) {
        teamData.employee = [];
    }

    console.log(`

    =================
    Add a New Employee
    =================
    `);
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Which type of Employee would you like to add?',
            choices: [
                'Engineer',
                'Intern'
            ]
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees name?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the Employees id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the Employees email?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the Employees github user name?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the Employees attended school?'
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add another employee?',
            default: false
        }
    ])
        .then(employeeData => {
            teamData.employee.push(employeeData);
            if (employeeData.confirmAddEmployee) {
                return promptEmployee(teamData);
            } else {
                return teamData;
            }
        });
}

promptManager()
    .then(promptEmployee)
    .then(teamData => {
        return generatePage(teamData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
    .catch(err => {
        console.log(err);
    });