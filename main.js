// 1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
// otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
// empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
// parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
// devolverme solo el 5.

// let arr = [1, 2, 3, 4, 5]

// const arrFromEnd = (arr, x=1) => {
//     arr.toString()
//     console.log(arr.slice(-x))
// }

// arrFromEnd(arr, 3)
// arrFromEnd(arr)


// 2. Escribe una función que, dado un array de números, devuelva una string con todos
// esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2, 3, 4, 6, 7, 8], 
// me devolvería “0 2 3 4-6 7 8”

// let arr = [0, 2, 3, 4, 6, 7, 8, 10, 11, 13, 14, 16, 18, 19]
// const arrWithHyphen = (arr) => {

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0 && arr[i] != 0 && arr[i + 1] % 2 == 0) {
//             arr[i] = arr[i]+"-"
//         }
//     }
//     return arr.join(" ").replaceAll("- ", "-")
// }
// console.log(arrWithHyphen(arr))


// 3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente y cuántas veces se ha repetido

// let arr = [2, 4, 5, 8, 4, 4, 9, 2].sort()
// let current
// let count = 0

// for (let i = 0; i<arr.length; i++) {

//     if(arr[i] != current) {
//         if (count > 0) {
//             console.log("number", current, "appears", count, "times")
//         }
//         current = arr[i]
//         count = 1
//     } else {
//         count ++
//     }
// }

// 4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y todas sus minúsculas a mayúsculas 
// y devuelva una nueva string.(“Hola” devolvería “hOLA”)

// let newWord = ""

// const caseChange = (word) => {

//     for (ch of word){
//         (ch == ch.toLowerCase()) ? newWord += ch.toUpperCase() : newWord += ch.toLowerCase()
//     }
//     return newWord
// }
// console.log(caseChange("Hola Caracola"))

// 5. Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]] 
// saque por consola cada uno de sus arrays interiores separados por indicadores con el número de fila

// let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]] 

// const print = (arr) => {
//     for (x in arr) {
//         console.log("Fila", parseInt(x)+1)
//         for (y of arr[x]) {
//             console.log(y)
//         }
//     }
// }
// print(arr)

// 6. Escribe una función que devuelva los años bisiestos en cierto rango de años.

// const bisiestos = (a, b) => {
//     for (let i = a; i <= b; i++) {
//         if (i % 4 == 0) {
//             console.log(i, " es año bisiesto")
//         } 
//     }
// }
// bisiestos(2000, 2024)

// 7. Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del array

// let arr = [1, 2, 1, 24]
// let el = 1
// let arr2 = []

// const quitar = (arr, el) => {
//     for (x of arr) {
//         if (x != el) { 
//             arr2.push(x)
//         }
//     }
//     console.log(arr2)
// }

// quitar(arr, el)

// 8. Crea una función que, dados dos arrays, devuelva un único array con ambos arrays
// concatenados pero que elimine los elementos repetidos de los mismos.

// let arr1 = [2, 2, 1, 24]
// let arr2 = [8, 11, 9, 1]
// let newArr = []

// const concatenar = (arr1, arr2) => {
//     let arr = arr1.concat(arr2) //joins both arrays in one
//     for (el of arr) {
//         if (!newArr.includes(el)) { // if the number is not in the new array, then it pushes it, if it is already there, then doesn´t
//             newArr.push(el)
//         }
//     }
//     console.log(newArr)
// }
// concatenar(arr1, arr2)

// 9. Crea una función que determine si un array contiene cierto elemento, pasando ambos como argumentos a la misma

// const comprobar = (arr, el) => {
//     for (x of arr) {
//         (el == x) ? console.log(`${el} es parte del array`) : ""
//     }
// }
// comprobar([1, 3, 5, 7, 9], 7)


// 10. Escribe una función que rellene un array con un determinado número de elementos y pasa ambas cosas por parámetro. 
// Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]

// let arr = []

// const rellenar = (times, el) => {
//     for (i = 0; i < times; i++) {
//         arr.push(el)
//     }
//     console.log(arr)
// }

// rellenar(3, 4)


// 11. Escribe una función para intercambiar las posiciones de dos elementos en un array.

// let arr = [1, 2, 3, 4, 5]
// const intercambiar = (a, b, arr) => {
//     if(arr.length >= a && arr.length >= b) {
//         [arr[a], arr[b]] = [arr[b], arr[a]]
//         console.log(arr)
//     }
// }
// intercambiar(1, 3, arr)


// 12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
//y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo deseado.

// let arr = []

// const generarArray = (num, l) => {
//     for (let i = num; i< (num +l); i ++) {
//         arr.push(i)
//     }
//     return arr
// }
// console.log(generarArray(5, 7))


// 13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
// ese array son números y devuelva la suma de los mismos.

// let array = [5, "5", "palabra", true, 4, 2, 9]
// const separaYSuma = (arr) => {
//     let total = 0
//     for (el of arr) {
//         typeof(el) == "number" ? total += el : ""
//     }
//     return total
// }
// console.log(separaYSuma(array))


// 14. Escribe una función que determine la palabra más larga de una string.

// let frase = "que la fuerza te acompañe"

// const palabraLarga = (frase) => {

//     let arr = frase.split(" ")
//     let current = arr[0]
//     arr.map((el, i) => {

//         if (el.length > current.length) {
//             current = arr[i]

//         } else {
//             return false
//         }
//     })
//     console.log( "La palabra más larga de la frase es: " + current )
// }
// palabraLarga(frase)


// 15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el resultado

// let frase = "que la fuerza te acompañe"
// let count = 0
// const contarVocales = (arr) => {
//     for (ch of arr) {
//         if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//             count++
//         }
//     }
//     return console.log(`En esta frase hay ${count} vocales`)
// }

// contarVocales(frase)


// 16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
// de caracteres que quieres que tenga la contraseña.

// let password = ""

// const contrasenya = (l) => {
//     for (let i=0; i<l; i++) {
//         password += Math.floor(Math.random()*10)
//     }
//     console.log(`The automatically generated ${l} character password is: '${password}'`)
// }
// contrasenya(8)


// 17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
// cada segundo y minuto entre ambas.

// const reloj = () => {
//     let hh = 23
//     let mm = 58
//     let ss = 0
//     console.log("START>>")
//     console.log("")
//     for (let m = 58; m <= 60; m++) {
//         if (m == 60) { mm = 0 }
//         mm = m

//         for (let s = 0; s < 60; s++) {
//             if (s == 60) { ss = 0 }
//             ss = s

//             let hora = hh.toString().replace("24", "00")
//             let minutos = mm.toString().padStart(2, "0").replace("60", "00")
//             let segundos = ss.toString().padStart(2, "0").replace("60", "00")

//             console.log(`${hora}:${minutos}:${segundos}`)

//             if (mm == 59 && ss == 59) {
//                 console.log(('00:' + '00:' + '00'))
//                 console.log("")
//                 return console.log(">>END")
//             }
//         }
//     }
//     console.log("END")
// }
// reloj()


// 18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
// parámetro el objeto y la propiedad en cuestión)

// const checkProps = (objeto, prop) => {
//     return prop in objeto ? `el objeto tiene la propiedad ${prop}` : `el objeto no tiene a propiedad ${prop}`
// }
// const persona = {
//     nombre: "Sergio",
//     edad: 40
// }

// console.log(checkProps(persona, "edad"))
// console.log(checkProps(persona, "altura"))


// 19. Escribe una función que sume todos sus argumentos, independientemente de cuántos sean

// const Sumar = (a, b, ...nums) => {
//     let arr = [a, b, ...nums]

//     let total = 0
//     for (x of arr) {
//         total += x
//     }
//     return total
// }
// console.log(Sumar(2, 3, 5, 4, 2))


// 20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
// cualquier cantidad de notas como parámetro

// const Aprovado = (...args) => {
//     let arr = [...args]
//     let total = 0
//     for (x of arr) {
//         total += x
//     }
//     let media = total / arr.length
//     return media >= 5 ? `aprovado con una nota de ${media}` : `suspenso con una nota de ${media}`
// }
// console.log(Aprovado(2, 3, 8, 9, 2))
// console.log(Aprovado(2, 8, 9, 3))


// 21. Escribe una función que reciba un array de números como argumento y saque la diferencia
// entre el número más alto y el más bajo del mismo. Utiliza el operador ...

// const Resta = (arr) => {
//     let arr1 = arr.sort(function (a, b) { return a - b })

//     return eval(arr1[arr1.length - 1] - arr1[0])
// }
// console.log(Resta([12, 98, 27, 9]))


// 22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
// tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
// y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
// en que cada objeto contiene toda la información de cada persona.

// let arr1 = [
//     { nombre: "Nombre1", apellido: "Apellido1" },
//     { nombre: "Nombre2", apellido: "Apellido2" },
//     { nombre: "Nombre3", apellido: "Apellido3" }
// ]
// let arr2 = [
//     { direccion: "carrer 1", telefono: 666111666, smthelse: "pin" },
//     { direccion: "carrer 2", telefono: 666222666, smthelse: "pan" },
//     { direccion: "carrer 3", telefono: 666333666, smthelse: "pun" }
// ]

// // usando map()
// const juntarArrays1 = (arr1, arr2) => {
//     if (arr1.length == arr2.length) {
//         return arr1.map((persona, i) => {

//             const personas = { ...persona, ...arr2[i] }
//             return personas
//         })
//     } else {
//         console.log("Data incomplete (arrays with different lengths)")
//     }
// }

// // usando for
// const juntarArrays2 = (arr1, arr2) => {
//     if (arr1.length == arr2.length) {
//         const personas = [];

//         for (let i = 0; i < arr1.length; i++) {
//             personas.push({ ...arr1[i], ...arr2[i] });
//         }

//         return personas;
//     } else {
//         console.log("Data incomplete (arrays with different lengths)")
//     }
// }
// console.log(juntarArrays1(arr1, arr2))
// console.log(juntarArrays2(arr1, arr2))


// 23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
// objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
// menos la edad. Hazlo utilizando el operador ...

// let personas = [
//     { nombre: 'Nombre1', apellido: 'Apellido1', direccion: 'carrer 1', telefono: 666111666, smthelse: 'pin' },
//     { nombre: 'Nombre2', apellido: 'Apellido2', direccion: 'carrer 2', telefono: 666222666, smthelse: 'pan' },
//     { nombre: 'Nombre3', apellido: 'Apellido3', direccion: 'carrer 3', telefono: 666333666, smthelse: 'pun' }
// ]

// const sinEdad = (arr, apellido) => {
//     return arr.map(
//         ({ apellido, ...rest }) => rest
//     )
// }
// console.log(sinEdad(personas))


// 24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
// primera letra de cada uno sea mayúscula y el resto minúsculas

// let arr = ["mara", "pAblo", "juan", "MARCOS"]

// let fixNames = (arr) => {
//     let lower = arr.map(e => e.toLowerCase())
//     let caps = lower.map(e => e.replace(e[0], e[0].toUpperCase()))
//     return caps
// }
// console.log(fixNames(arr))


// 25. Crea un array con únicamente los nombres de los siguientes objetos
// Además, saca un array únicamente con los nombres de los mayores de 30

// let personas = [
//     { nombre: "Mara", edad: 30 },
//     { nombre: "Pablo", edad: 35 },
//     { nombre: "Juan", edad: 26 },
//     { nombre: "Marta", edad: 56 },
//     { nombre: "Rodrigo", edad: 31 },
// ]
// const nombres = []
// personas.map(e => nombres.push(e.nombre))

// const noms30 = []
// personas.map(e => { if (e.edad > 30) { noms30.push(e.nombre) } })

// console.log(nombres)
// console.log(noms30)


// 26. Dado un array de números, crea una función que sume solo los pares

// let arr = [2, 2, 1, 24, 8, 11, 9, 4]
// let total = 0

// const SumaPares = (arr) => {
//     arr.map(e => (e % 2 == 0) ? total += e : total += 0)
//     return total
// }
// console.log(SumaPares(arr))


// 27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string

// let nombreCompleto = "Sergio Torres Garcia"
// let iniciales = []
// nombreCompleto.split(' ').map(e => iniciales.push(e[0]))

// console.log(iniciales.join(''))


// 28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9
let estudiantes = [
    { nombre: 'Mara', notas: [10, 7, 8, 8, 9] },
    { nombre: 'David', notas: [6, 2, 5, 10, 7] },
    { nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },
    { nombre: 'Pablo', notas: [10, 10, 9, 8, 9] },
];

let best = []
const bestStudents = (obj) => {
    obj.map(e => {
        let largo = e.notas.length
        let total = 0
        for (x of e.notas) {
            total += x
        }
        let media = total / largo
        // return media
        return media > 9 ? best.push(e.nombre) : false
    })
    return best
}
console.log(bestStudents(estudiantes))






