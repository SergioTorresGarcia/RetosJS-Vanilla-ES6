### Retos - JS Vanilla + ES6

1. Escribe una función que devuelva el último elemento de un array. Además, debe tener
otro parámetro opcional que, en caso de pasarse, devolvería esa cantidad de números
empezando por el final. Es decir, si mi array es [1, 2, 3, 4, 5] y yo le paso el 3 como
parámetro, debe devolverme [3, 4, 5] y, si no le paso nada como parámetro, debe
devolverme solo el 5.
2. Escribe una función que, dado un array de números, devuelva una string con todos
esos números e inserte guiones entre los números pares. Es decir, dado el array [0, 2,
3, 4, 6, 7, 8], me devolvería “0 2 3 4-6 7 8”
3. Dado un array con elementos repetidos, determina qué elemento es el más frecuente
y cuántas veces se ha repetido
4. Dada una string, crea una función que cambie todas sus mayúsculas a minúsculas y
todas sus minúsculas a mayúsculas y devuelva una nueva string.(“Hola” devolvería
“hOLA”)
5. Crea una función que, dado el siguiente array: [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4,
28, 14], [3, 10, 26, 7]] saque por consola cada uno de sus arrays interiores separados por
indicadores con el número de fila, es decir:
Fila 1
1
2
1
24
Fila 2
8
6. Escribe una función que devuelva los años bisiestos en cierto rango de años.
7. Crea una función que, dados un array y uno de sus elementos, elimine ese elemento del
array
8. Crea una función que, dados dos arrays, devuelva un único array con ambos arrays
concatenados pero que elimine los elementos repetidos de los mismos.
9. Crea una función que determine si un array contiene cierto elemento, pasando ambos
como argumentos a la misma
10. Escribe una función que rellene un array con un determinado número de elementos y
pasa ambas cosas por parámetro. Es decir, la ejecución de rellenar(3, 4) sería [4, 4, 4]
11. Escribe una función para intercambiar las posiciones de dos elementos en un array.
12. Escribe una función que genere un array de números y pásale por parámetro el número inicial
y el largo del array. El array resultante debe ir sumando de uno en uno hasta alcanzar el largo
deseado.
13. Escribe una función que, al pasarle un array como argumento, determine qué elementos de
ese array son números y devuelva la suma de los mismos.
14. Escribe una función que determine la palabra más larga de una string
15. Crea una función que, dada una string, cuente cuántas vocales hay en la misma y devuelva el
resultado
16. Crea una función que genere una contraseña aleatoria. Debes pasar por parámetro la cantidad
de caracteres que quieres que tenga la contraseña.
17. Crea una función reloj que vaya desde las 23:58:00 hasta las 00:00:00 y saque por consola
cada segundo y minuto entre ambas.
18. Escribe una función que compruebe si un objeto tiene determinada propiedad (pasando como
parámetro el objeto y la propiedad en cuestión)
19. Escribe una función que sume todos sus argumentos, independientemente de cuántos sean
20. Escribe una función que me diga si un alumno está aprobado o no, a la cual puedo pasar
cualquier cantidad de notas como parámetro
21. Escribe una función que reciba un array de números como argumento y saque la diferencia
entre el número más alto y el más bajo del mismo. Utiliza el operador ...
22. Crea dos arrays de objetos. El primero debe contener los nombres y apellidos de por lo menos
tres personas. El segundo debe contener otros datos de esas mismas personas, como su dirección
y su número de teléfono. Utiliza una función para combinar ambos arrays y obtener un array nuevo
en que cada objeto contiene toda la información de cada persona.
23. Dado el objeto combinado del ejercicio anterior, crea una función que saque cada uno de los
objetos excluyendo la edad de la persona. Es decir, debo ver todas las propiedades de cada objeto
menos la edad. Hazlo utilizando el operador ...
24. Dado el array de nombres ["mara", "pAblo", "juan", "MARCOS"], devuelve otro en que la
primera letra de cada uno sea mayúscula y el resto minúsculas
25. Crea un array con únicamente los nombres de los siguientes objetos
let personas = [
{ nombre: "Mara", edad: 30 },
{ nombre: "Pablo", edad: 35 },
{ nombre: "Juan", edad: 26 },
{ nombre: "Marta", edad: 56 },
{ nombre: "Rodrigo", edad: 31 },
];
Además, saca un array únicamente con los nombres de los mayores de 30
26. Dado un array de números, crea una función que sume solo los pares
27. Dado un nombre completo (en string), obtén sus iniciales y sácalas también en una string
28. Saca únicamente los nombres de los estudiantes que tengan una media por encima de 9
let estudiantes = [
{ nombre: 'Mara', notas: [10, 7, 8, 8, 9] },
{ nombre: 'David', notas: [6, 2, 5, 10, 7] },
{ nombre: 'Marcos', notas: [3, 5, 2, 8, 5] },
{ nombre: 'Pablo', notas: [10, 10, 9, 8, 9] },
];