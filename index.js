// packages needed 
const inquirer = require('inquirer');
const fs = require('fs'); // to read/write files
const path = require('path');


// module exports
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const { generateHtml } = require('./src/generateHTML.js');



// blank array for question prompts
const teamArray = [];

// function for team profile
async function teamProfile() {

    // initial team member: Manager
    addManager = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please provide the name of the team manager:",
            },
            {
                type: 'number',
                name: 'id',
                message: "Please provide the team manager's identification number:",
            },
            {
                type: 'input',
                name: 'email',
                message: "Please provide the team manager's email",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Please provide the team manager's office number:",
            }
        ])
        .then(managerInput => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager (name, id, email, officeNumber);
    
            teamArray.push(manager);
            console.log(manager);

            addEmployee();
        })
    };

    // prompts to add more employees
    addEmployee = () => {
        return inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: "Please select a team member to add to the team profile:",
                choices: [
                    'Engineer',
                    'Intern',
                    'I am finished adding to the team profile.',
                ]
            }
        ])
        .then(data => {
            if (data.role === "Engineer") {
                addEngineer();
            } else if (data.role === "Intern") {
                addIntern();
                } else if (data.role === "I am finished adding to the team profile.") {
                    const html = generateHtml(teamArray);
                    console.log(html);
                    const outputPath = path.join(__dirname, 'dist', 'output.html');
                    fs.writeFileSync(outputPath, html);
                }
        })
    };

    // prompts for engineer 
    addEngineer = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please provide the engineer's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please provide the engineer's identification number:"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please prodivde the engineer's email address:",
            },
            {
                type: 'input',
                name: 'github',
                message: "Please provide the engineer's github username:",
            }
        ])
        .then(engineerInput => {
            const engineerData = new Engineer(engineerInput.name, engineerInput.id, engineerInput.email, engineerInput.github);
            teamArray.push(engineerData);
            addEmployee();
        })
    };

    // prompts for intern 
    addIntern = () => {
        return inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Please provide the intern's name:",
            },
            {
                type: 'input',
                name: 'id',
                message: "Please provide the intern's identification number:"
            },
            {
                type: 'input',
                name: 'email',
                message: "Please prodivde the intern's email address:",
            },
            {
                type: 'input',
                name: 'school',
                message: "Please provide the intern's school name",
            }
        ])
        .then(internInput => {
            const internData = new Intern(internInput.name, internInput.id, internInput.email, internInput.school);
            teamArray.push(internData);
            addEmployee();
        })
    };

    // to start prompts
    profilePrompt = () => {
        addManager();
    };
    profilePrompt();
}


// call teamProfile function
teamProfile();










