// Dado un array de valores, devolver un array truthy ( sin valores nulos, vacios, no numeros, indefinidos o falsos)
const arrDirty = [ NaN, 0, 5, false, -1, '', undefined, 3, null, ''];

let arrClean = arrDirty.filter(Boolean);
/* let arrClean = arrDirty.filter(Number);//mas lenta */

console.log(arrClean);