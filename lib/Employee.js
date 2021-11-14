// universal 
// employee parent class 
// takes in the properties of name, id & email

class Employee {
    constructor(name, id, email) {
        // 'this' refers to the 'owner' of the function
        this.name = name; 
        this.id = id;
        this.email = email;
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

    // to get employee role in company (ie; manager, engineer, intern)
    getRole() {
        return "Employee";
    }
}

// export 
module.exports = Employee; 