// Escribe un programa que pida al usuario su año de nacimiento y nombre e imprime su edad actual en la consola con la frase Hola X, grandioso! Tienes X años. Asume que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola: Hola Juan, grandioso! Tienes 20 años

function edadU() {
    let edadF=[]
    let anioActual = 2020
    let anio = parseFloat (prompt("Digita tú año de nacimiento"));
    let edad = ( anioActual - anio )
    edadF.push (edad)
    return edadF
}

let nombreUsuario = []
function nombreU() {
    
    let nombre = prompt("Digita digita nombre");
    nombreUsuario.push ( nombre )
    const edad = edadU ()
    alert( `Hola, ${nombreUsuario}! Tu edad es ${edad} años.` );
}
nombreU ()



