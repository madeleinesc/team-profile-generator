// Employee module exported to Intern.js for use as parent class
const Employee = require("./lib/Employee.js");

// to make sure constructor is working
describe('make sure employee constructor is working', () => {
    test("should create a new employee object", () => {
        const employee = new Employee("Moss", 1, "moss@gmail.com");
        expect(employee).toEqual({name: "Moss", id: 1, email: "moss@gmail.com"})
    })
})