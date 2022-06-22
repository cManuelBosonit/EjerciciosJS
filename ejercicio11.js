/* Crear una función que tome un array como parametro y lo divida en arrays
nuevos con tantos elementos como sean especificados.
La funcion debe tener 2 párametros:
● Primer parámetro es el array entero que se quiere dividir
● Segundo parámetro es el número de elementos que deben tener los
arrays en los que se divida el array original del primer parámetro.

Ejemplo de uso de la función:
const result = splitArrayIntoChucks([1, 2, 3, 4, 5, 6, 7], 3);
console.log(result); // [[1,2,3],[4,5,6],[7]] */

function splitArrayIntoChucks(array, number){
    let finalArray = [];
    for(let element of array){
        let last = finalArray[finalArray.length -1];
        if (!last || last.length === number){
            finalArray.push([element]);
        } else {
            last.push(element);
        }
    }
    return finalArray;
}

console.log(splitArrayIntoChucks([1, 2, 3, 4, 5, 6, 7], 2))