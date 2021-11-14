// Employee module exported to Intern.js for use as parent class
const Employee = require("./Employee.js");

// Intern class will inherit from Employee class
class Intern extends Employee {
    constructor(name, id, email, school) { 
        // properties inherited from employee
        super(name, id, email); 
        // property from owner of this function
        this.school = school; 
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