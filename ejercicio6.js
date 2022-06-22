/* Crea una función que redondee un número float a un número específico de
decimales.
La función debe tener dos parámetros:
● Primer parámetro es un número float con x decimales
● Según parámetro es un int que indique el número de decimales al que
redondear

Ejemplo de uso de la función:
const roundedResult = roundTo(2.123, 2);
console.log(roundedResult); // 2.12
const roundedResult = roundTo(1.123456789, 6);
console.log(roundedResult); // 1.123457 */

//Con toFixed
const roundedResult = (num, decimals) => {
    return Number.parseFloat(num).toFixed(decimals);
}

//Sin toFixed
const roundedResultNotoFixed = (num, decimals) => { 
    decimals = Math.pow(10, decimals); 
    return Math.floor(num * decimals) / decimals; 
}

console.log(roundedResult(2.123, 2));
console.log(roundedResultNotoFixed(2.123, 2));