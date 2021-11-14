// Intern module export
const Intern = require("../lib/Intern.js");

// to test school
describe("getSchool", () => {
    test("should return employee's school", () => {
        const intern = new Intern("neo", 1, "neo@gmail.com", "thematrix");
        const school = intern.getSchool();

        expect(school).toBe("thematrix")

    })
})

// to test employees role
describe("getRole", () => {
    test("Should return employee role", () => {
        const intern = new Intern("Neo", 1, "neo@gmail.com", 1, "thematrix");

        expect(intern.getRole()).toEqual("Intern");
    })
})



