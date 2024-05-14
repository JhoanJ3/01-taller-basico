// Escribe un programa que le pida al usuario ingresar un número.

// Si el número es múltiplo de 3 debe imprimir en la consola bing.
// Si el número es múltiplo de 5 debe imprimir en la consola bong.
// Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola bingbong.
// Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.


function multiplos( ) {
     
     let numero = parseInt(prompt("Ingrese un numero por favor:"));
     if ( numero > 0 && numero % 5 === 0 && numero % 3 === 0 ) { 
          alert( `${numero} bingbong` )
     } 
     else if (numero > 0 && numero % 3 === 0) {
          alert ( `${numero} bing` )
     }
     else if (numero > 0 && numero % 5 === 0) {
          alert ( `${numero} bong` )
     }
     else{
          alert("No, el número "+numero+ " no es múltiplo de 5");
     }
}
multiplos()