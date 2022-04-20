const Ajolonauta = require('./../app/ajolonauta')


describe("Pruebas de unidad de ajolonauta", () => {
    test('Caso de prueba 1: Creación de objeto', () => {
        //Aquí se puede usar código como se desee utilizar
        const woopa = new Ajolonauta("Woopa")

        //Validación del resultado esperado
        expect(woopa.name).toBe("Woopa");
    });
})