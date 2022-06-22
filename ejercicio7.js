/* Crea una función que retorne los campos de un objeto que equivalgan a un
valor “falsy” después de ser ejecutados por una función específica.
La función debe tener dos parámetros:
● Primer parámetro es un objeto con x número de campos y valores
● Segundo parametro es una funcion que retorne un booleano, que se
tiene que aplicar al objeto del primer parámetro

Ejemplo de uso de la función:
const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x ===
'string')
console.log(result); // {a: 1, c: 3} */

const returnFalsyValues = (obj, func) => {
   for (const key in obj) {
    if ( func(obj[key])) {
      delete obj[key]    
    }
  }
  return obj; 
}

const returnFalsyValuesForEach = (obj, func) => {
  let auxiliar = [];  
  Object.entries(obj).forEach(([key, value]) => {
     if(!func(obj[key]) ){     
       auxiliar.push([key,value])           
     }
   })
   return Object.fromEntries(auxiliar)
}

const returnFalsyValuesFilter = (obj, func) => {
  return Object.fromEntries(Object.entries(obj).filter(([key, value]) => !func(obj[key]) ))
}


const result = returnFalsyValues({ a: 1, b: '2', c: 3 }, x => typeof x === 'string');
console.log(result);

const resultForEach = returnFalsyValuesForEach({ a: 1, b: '2', c: 3 }, x => typeof x === 'string');
console.log('ForEach: ',resultForEach);

const resultFilter = returnFalsyValuesFilter({ a: 1, b: '2', c: 3 }, x => typeof x === 'string');
console.log('Filter: ',resultFilter);

