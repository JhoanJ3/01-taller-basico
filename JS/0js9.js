// Escribe un programa que:

// Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
// Elimine el segundo elemento.
// Recorra e imprima el arreglo.

function crearRango(){
    let numeros = []

    let numero = parseInt(prompt('ingrese un numero'));

    for(let i =  1; i <= numero; i++)
        numeros.push(i) 


    numeros.splice(1, 1)
    console.log(numeros)
}
crearRango();