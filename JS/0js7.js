// Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:


let numeroI = parseInt (prompt("Ingrese un #")); 
let numeroF = parseInt (prompt("Ingrese un #")); 

    for ( let i = numeroI; i <= numeroF; i++ ) {
        console.log( i );
    }  

    