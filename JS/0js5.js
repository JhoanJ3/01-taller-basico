// Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces. NOTA: utiliza un ciclo para imprimir la frase las 10 veces.
function multiplo5( ) {
    let palabras =[]
    let palabra = prompt("Ingrese una palabra"); //capturamos el valor
    palabras.push (palabra)
    
    for ( let i = 0; i <= 9; i++ ) {
        console.log( palabras );
    }  
   
}
multiplo5()