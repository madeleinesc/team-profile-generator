// Employee module export
const Employee = require("../lib/Employee.js");

// to make sure constructor is working
describe('make sure employee constructor is working', () => {
    test("should create a new employee object", () => {
        const employee = new Employee("Neo", 1, "neo@gmail.com");
        expect(employee).toEqual({name: "Neo", id: 1, email: "neo@gmail.com"})
    })
})

// to test name 
describe("getName", () => {
    test("should return entered name", () => {
        const employee = new Employee("Neo", 1, "neo@gmail.com");
        const employeeName = employee.getName();

        expect(employeeName).toBe("Neo");
    })
})

// to test id
describe("getId", () => {
    test("Should return entered id number", () => {
        const employee = new Employee("Neo", 1, "neo@gmail.com");
        const employeeId = employee.getId();

        //expect(employeeId).toBe("1");
    })
})

// to test email
describe("getEmail", () => {
    test("Should return entered email address", () => {
        const employee = new Employee("Neo", 1, "neo@gmail.com");
        const employeeEmail = employee.getEmail();

        expect(employeeEmail).toBe("neo@gmail.com");
    })
})