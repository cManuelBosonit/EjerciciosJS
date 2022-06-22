//Dado tres arrays de números, sacar en un nuevo objeto la intersección de estos.

const arrNumber1 = [1,2,3];
const arrNumber2 = [1,2,3,4,5];
const arrNumber3 = [1,4,7,2];

function interseccion(arr1,arr2,arr3){
    let union = [];
    union = [arr1, arr2, arr3];
    interseccionArrays = union.reduce((a,b) => a.filter(c => b.includes(c)))
    return interseccionArrays;
}

console.log(interseccion(arrNumber1,arrNumber2,arrNumber3));