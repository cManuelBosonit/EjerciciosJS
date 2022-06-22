/* Crear una función que elimine las etiquetas html o xml de un String.
La función debe tener un string como único parámetro.

Ejemplo de uso de la función:
const result = removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result); // lorem ipsum */

const removeHTMLTags = (html) => {
    return html.replace(/<[^>]*>?/ig, ' ');
}


const result = removeHTMLTags('<div><span>lorem</span><strong>ipsum</strong></div>');
console.log(result);