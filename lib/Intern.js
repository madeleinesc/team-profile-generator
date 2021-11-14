// Employee module exported to Intern.js for use as parent class
const Employee = require("./lib/Employee.js");

// Intern class will inherit from Employee class
class Intern extends Employee {
    constructor(name, id, email, github) { 
        // properties inherited from employee
        super(name, id, email); 
        // property from owner of this function
        this.school = school; 
    }

    // to get name
    getName() {
        return this.name; 
    }

    // to get id no.
    getId() {
        return this.id; 
    }

    // to get email
    getEmail() {
        return this.email; 
    }

    // to get employee role in company
    getRole() {
        return "Intern";
    }

    // to get employee's school
    getSchool() {
        return this.school;
    }
}

// export
module.exports = Intern;