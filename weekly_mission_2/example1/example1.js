const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "CDMX",
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

console.log(explorers)

console.log("Ejercicio 2.1")

explorers.forEach(explorer => console.log(explorer.name))

console.log("Ejercicio 2.2")
explorers.forEach(item => console.log(item.stack)) //forEach: ejecuta código sobre cada objeto de un grupo/lista

console.log("Ejercicio 2.3")
const explorers_stacks = explorers.map(my_explorer_in_list => my_explorer_in_list.stack)  //map: crea una nueva lista a partir de los objetos de una lista/grupo, la cula se guarda en una variable distinta
console.log(explorers_stacks)

console.log("Ejercicio 2.4")
const explorer_with_js = explorers.filter(my_explorer_in_list => my_explorer_in_list.stack.includes("js")) //filter: filtra una lista, guardando los resultado en una vaiable diferente
console.log(explorer_with_js)


console.log("Ejercicio 2.5")
const first_explorer_in_cdmx = explorers.find(my_explorer_in_list => my_explorer_in_list.city === "CDMX") //find: retorna el primer resultado de una condición en una lista
console.log(first_explorer_in_cdmx)


console.log("Ejercicio 2.6")
const all_exercises = explorers.reduce((acc, my_explorer_in_list) => acc + my_explorer_in_list.exercises_completed, 0) //reduce: requiere una variable acumuladora (acc) para actualizar los valores a analizar en una lista
console.log(all_exercises)