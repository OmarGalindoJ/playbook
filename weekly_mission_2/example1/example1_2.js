console.log("2) Creación de un objeto con propedades")

const myObject = {
    name: "Omar",
    age: 42,
    mission: "Node JS",
    stack: ["Help desk", "js" , "servers"], //lista
    blog: { 
        url : "https://omargalindoj.github.io/my_launchx_blog/",
        post: 3
    }, //esto es un objeto
}

console.log(myObject)

console.log ("Accediendo a las propiedades del objeto")
console.log (myObject.name) //modo 1
console.log (myObject["age"]) //modo 2


console.log ("Ejemplo 3: Objeto con métodos")
const ajolonauta = {
    name:"Whoopa",
    mission: "Node JS",
    //definiendo una función
    sayHelloToExplorers : function () {
        console.log("Que tal, yo soy el ajolonauta")
    },

    tellMeMore : function () {
        /*console.log(`Ajolonauta: ${this.name}`)*/

        //modo 2 de impresión
        return `Ajolonauta: ${this.name}`
    }

}
console.log("Ajolonauta:")
console.log(ajolonauta)

//imprimiendo valores de función (no se requiere console.log)
ajolonauta.sayHelloToExplorers()
/*ajolonauta.tellMeMore()*/
console.log(ajolonauta.tellMeMore()) 