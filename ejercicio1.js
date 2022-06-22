// Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'},
  ];

const objetoIdTres = arrNames.filter((objeto) => objeto.id === 3);

console.log(objetoIdTres);


/* const objetoIdTres = [];

for(let i = 0; i < arrNames.length; i++){
  console.log(arrNames[i].id)
  if(arrNames[i].id === 3){  
    objetoIdTres.push(arrNames[i]);
  }
}

console.log(objetoIdTres); */


/* const objetoIdTres = [];
arrNames.map((objeto) => {
  if(objeto.id === 3){
    return objetoIdTres.push(objeto)
  }
})


console.log(objetoIdTres) */

