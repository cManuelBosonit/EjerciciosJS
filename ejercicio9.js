/* Crear una función que a partir de un objeto de entrada, retorne un objeto
asegurándose que las claves del objeto estén en lowercase.
La función debe tener un objeto como único parárametro.

Ejemplo de uso d ela función:

const myObject = {NamE: 'Charles', ADDress: 'Home Street'};
const myObjectLowercase = toLowercaseKeys(myObject);
console.log(myObjectLowercase); // {name: 'Charles', address: 'Home Street'} */

const myObject = {NamE: 'Charles', ADDress: 'Home Street'};

const toLowercaseKeys = (obj) => {
    return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => {
          return  [key.toLowerCase(), value]
        })
    )
}

const toLowercaseKeysForIn = (obj) => {
  for (const key in obj) {
    obj[key.toLowerCase()] = obj[key]
    delete obj[key]
  } 
  
  return obj;
}

const myObjectLowercase = toLowercaseKeys(myObject);
console.log(myObjectLowercase);
const myObjectLowercaseForIn = toLowercaseKeysForIn(myObject);
console.log(myObjectLowercaseForIn);
