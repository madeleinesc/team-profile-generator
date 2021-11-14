// Manager module export
const Manager = require("../lib/Manager.js");

// to test office number
describe("getOfficeNo", () => {
    test("should return office number", () => {
        const manager = new Manager("neo", 1, "neo@gmail.com", 1)
        const managerOffice = manager.getOfficeNo();

    })
})

// to test employees role
describe("getRole", () => {
    test("Should return employee role", () => {
        const manager = new Manager("Neo", 1, "neo@gmail.com");

        expect(manager.getRole()).toEqual("Manager");
    })
})
