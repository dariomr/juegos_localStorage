let indice = parseInt(prompt('0. Crear datos\n1. Listado de juegos\n2. Añadir nuevo juego\n3. Eliminar juego\n4. Modificar juego')); 

const juegos = new Array(['League of Legends', 0, 'Riot Games'],
['Grand Theft Auto V', 20, 'Rockstar'],
['test', 18, 'test'],
['World of Warcraft', 40, 'Blizzard']);


function crearDatos() {
    const juegos = new Array(['League of Legends', 0, 'Riot Games'],
                             ['Grand Theft Auto V', 20, 'Rockstar'],
                             ['test', 18, 'test'],
                             ['World of Warcraft', 40, 'Blizzard']);

    // Local Storage
    let juegosJSON = (JSON.stringify(juegos));
    localStorage.setItem('juegos', juegosJSON);
    console.log(window.localStorage);

    alert('Los datos se han creado correctamente de nuevo!');
    mostrarJuegos();
}

function mostrarJuegos() {

    let localJuegos = Array.from (JSON.parse(localStorage.getItem('juegos')));
    
    console.log(localJuegos);
    console.log(typeof(localJuegos));

    document.write('<ul>');
    juegos.forEach(juego => {
        document.write(`<li><p>Nombre: ${juego[0]}</p>
                            <p>Precio: ${juego[1]}€</p>
                            <p>Desarrolladora: ${juego[2]}</p></li><br>`);
    });
    document.write('</ul>');
}

function anadirJuego() {
    let nombre = prompt("Nombre del juego:");
    let precio = prompt("Precio del juego:");
    let desarrolladora = prompt("Nombre de la empresa desarrolladora:");
    nuevoJuego = [nombre, precio, desarrolladora]
    juegos.push(nuevoJuego);

    mostrarJuegos();
}

function eliminarJuego() {
    let nombre = prompt("Introduce el nombre del juego que quieres eliminar")
    juegos.forEach(juego => {
        if(juego[0] == nombre) {
            console.log(juego[0]);
            let i = juegos.indexOf(juego);
            console.log(juegos[2]);
            juegos.splice(i, 1);
        } 
    });
    mostrarJuegos();
}

switch(indice) {
    case 0:
        crearDatos();
    break;
    case 1:
        mostrarJuegos();
    break;
    case 2:
        anadirJuego()
    break;
    case 3:
        eliminarJuego();
    break;
    

}