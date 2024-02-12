// 1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
// otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
// empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
// parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
// devolverme solo el 5.

let arr = [1, 2, 3, 4, 5]

const arrFromEnd = (arr, x=1) => {
    arr.toString()
    console.log(arr.slice(-x))
}

arrFromEnd(arr, 3)
arrFromEnd(arr)


// 2. Escribe una función que, dado un array de números, devuelva una string con todos
// esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2,
// 3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”
// 3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente
// y cuántas veces se ha repetido
// 4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
// todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
// “hOLA”)