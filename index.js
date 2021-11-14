// packages needed 
const inquirer = require('inquirer');
const fs = require('fs'); // to read/write files
const jest = require('jest');


// module exports
const generateHTML = require("./src/generateHTML.js"); // for generate markdown html -> to create webpage
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");



