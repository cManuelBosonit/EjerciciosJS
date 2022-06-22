/* Dado un array de ciudades, sacar en un nuevo array las ciudades no
capitales con unos nuevos parámetros que sean city y isSpain. El valor de
isSpain será un booleano indicando si es una ciudad de España.

Ejemplo: {city: "Logroño", isSpain: "true"} */

const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
];

let citiesChanged = [];

citiesChanged = arrCities2.filter((objeto) => objeto.capital !== true)
        .map((cities) => {
            if(cities.country === 'Spain'){
                cities = ({city: cities.city, 'isSpain': true})
            }else{
                cities = ({city: cities.city, 'isSpain': false})
            } 
            return cities
    })


console.log(citiesChanged)






//const noCapi = arrCities2.filter((objeto) => objeto.capital !== true);

/* const noCapital = (arr) => {
    //return 
    let arrModi = [];
    let prueba = [];
    prueba = arr.map(({objeto}) => objeto)


    
    //arrModi = arr.filter((objeto) => objeto.capital !== true)//.filter((objeto) => objeto.country === 'Spain');
    return prueba
}

console.log(noCapital(arrCities2)); */