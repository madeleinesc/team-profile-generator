// Engineer module export
const Engineer = require("../lib/Engineer.js");

// to test github profile
describe("getGithub", () => {
    test("should return employee's github profile", () => {
        const engineer = new Engineer("neo", 1, "neo@gmail.com", "theone");
        const github = engineer.getGithub();

        expect(github).toBe("theone")

    })
})

// to test employees role
describe("getRole", () => {
    test("Should return employee role", () => {
        const engineer = new Engineer("Neo", 1, "neo@gmail.com", 1, "theone");

        expect(engineer.getRole()).toEqual("Engineer");
    })
})

