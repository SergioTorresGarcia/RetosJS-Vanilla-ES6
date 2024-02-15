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

let arr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]] 

const print = (arr) => {
    for (x in arr) {
        console.log("Fila", parseInt(x)+1)
        for (y of arr[x]) {
            console.log(y)
        }
    }
}
print(arr)