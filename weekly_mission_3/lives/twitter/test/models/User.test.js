const User = require("../../app/models/User")

describe("Test para User" , () => {
    test("Creación de User", () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio" , "dateCreated" , "lastUpdate")
        expect(user.id).toBe(1)
        expect(user.username).toBe("viejogro")
    })
})