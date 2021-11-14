// universal 
// employee parent class 
// takes in the properties of name, id & email

class Employee {
    constructor(name, id, email) {
        this.name = name; // 'this' refers to the 'owner' of the function
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

// export to index.js
module.exports = Employee; 