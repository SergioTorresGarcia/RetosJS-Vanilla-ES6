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

const Sumar = (a, b, ...nums) => {
    let arr = [a, b, ...nums]

    let total = 0
    for (x of arr) {
        total += x
    }
    return total
}
console.log(Sumar(2, 3, 5, 4, 2))