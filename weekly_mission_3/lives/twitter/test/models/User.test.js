const User = require("../../app/models/User")

describe("Test para User" , () => {
    test("Requerimiento 1: Creación de User", () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio")
        expect(user.id).toBe(1)
        expect(user.username).toBe("viejogro")
    })

    test("Requerimiento 2: Fechas en atributos de User" , () => {
        const user = new User (1, "viejogro" , "OmarGalindoJ" , "Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    })
})