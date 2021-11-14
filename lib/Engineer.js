// Employee module exported to Engineer.js for use as parent class
const Employee = require("./lib/Employee.js");

// Engineer class will inherit from Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) { 
        // properties inherited from employee
        super(name, id, email); 
        // property from owner of this function
        this.github = github; 
    }

    // to get employee role in company
    getRole() {
        return "Engineer";
    }

    // to get employee github profile
    getGithub() {
        return this.github;
    }
}

// export
module.exports = Engineer;