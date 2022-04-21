console.log ("POO")

//objeto de js
const woopa_obj = {
    name: "Woopa",
    mission: "Node JS",
    age: "12",
    color: "pink",
}


/*
    1. Como crear una clase
    2. Como instanciar un objeto de una clase
    3. instanciar varios objetos de una misma clase
    4. Como agregar el constructor para guardar atributos al crear un objeto
    5. Crear métodos
*/

//crear una clase ("molde")
class Ajolonauta {
    constructor(name, mission, age, color){
        this.name = name
        this.mission = mission
        this.age = age
        this.color = color
    }

//crear un método
sayHello() {
    //return "Hey, Hello" //Método 1
    return `${this.name} is saying Hello` //Método 2
    }
}



//console.log(Ajolonauta)


//objeto vacío de js
const woopa_obj_js = {} 
console.log(woopa_obj_js)

const woopa = new Ajolonauta("Woopa", "Node JS", "12", "pink") //instanciar un objeto
console.log(woopa)
console.log(woopa.sayHello())

const wooper = new Ajolonauta("Wooper", "Java", "10", "blue")
console.log(wooper)

const woopy = new Ajolonauta("Woopy", "Java", "13", "purple")
console.log(woopy.name)
console.log(woopy.sayHello())

