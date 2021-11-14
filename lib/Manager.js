// Employee module exported to manager.js for use as parent class
const Employee = require("./lib/Employee.js");

// Manager class will inherit from Employee class
class Manager extends Employee {
    constructor(name, id, email, officeNo) { 
        // properties inherited from employee
        super(name, id, email); 
        // property from owner of this function
        this.officeNo = officeNo; 
    }

    // to get employee role in company
    getRole() {
        return "Manager";
    }

    // to get office number
    getOfficeNo() {
        return this.officeNo;
    }
}

// export
module.exports = Manager;