/* Crear una función que convierta un número de bytes en un formato con valores 
legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')
La funcion debe tener 2 párametros:
● Primer parámetro debe ser el número de bytes
● Segundo parámetro debe ser un número especificando la cantidad de
dígitos a los que se debe truncar el resultado (esto se puede hacer
con Number.prototype.toPrecision()). Por defecto, este parámetro de
de tener un valor de 3.

Ejemplo de uso de la función:
const result = fromBytesToFormattedSizeUnits(1000);
console.log(result); // 1KB

const result = fromBytesToFormattedSizeUnits(123456789);
console.log(result); // 123MB

const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB */

const fromBytesToFormattedSizeUnits = (bytes, decimals = 3) => {
    if (bytes === 0) return '0 Bytes';

    const byte = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    if(bytes < 0){
        bytes = Math.abs(bytes);
        const i = Math.floor(Math.log(bytes) / Math.log(byte));                                               //toPrecision(dm)
            return -Math.abs(parseFloat((bytes / Math.pow(byte, i)).toFixed(dm))) + ' ' + " KMGTP".charAt(i) + "B"; 
    }

    const i = Math.floor(Math.log(bytes) / Math.log(byte));  
                                                //toPrecision(dm)
    return parseFloat((bytes / Math.pow(byte, i)).toFixed(dm)) + ' ' + " KMGTP".charAt(i) + "B"; 

    
    /* let sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    for (let i = 0; i < sizes.length; i++) {
      if (bytes <= 1024) {
        return bytes + ' ' + sizes[i];
      } else {
        bytes = parseFloat(bytes / 1024).toFixed(2)
      }
    }
    return bytes + ' P'; */


}  


const result = fromBytesToFormattedSizeUnits(-12145489451.5932, 5);
console.log(result); // -12.145GB */


