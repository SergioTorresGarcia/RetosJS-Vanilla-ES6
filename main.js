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

let arr = [1, 2, 3, 4, 5]
const intercambiar = (a, b, arr) => {
    if(arr.length >= a && arr.length >= b) {
        [arr[a], arr[b]] = [arr[b], arr[a]]
        console.log(arr)
    }
}
intercambiar(1, 3, arr)