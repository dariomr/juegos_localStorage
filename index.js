let indice = parseInt(prompt('0. Crear datos (Si utilizas el programa por primera vez)\n1. Listado de juegos\n2. Buscar juego\n3. Añadir nuevo juego\n4. Modificar juego\n5. Eliminar juego\n')); 

function crearDatos() {
    const juegos = new Array(['League of Legends', 0, 'Riot Games'],
                             ['Grand Theft Auto V', 20, 'Rockstar'],
                             ['World of Warcraft', 40, 'Blizzard']);

    // Local Storage - json
    let juegosJSON = (JSON.stringify(juegos));
    localStorage.setItem('juegos', juegosJSON);
    console.log(window.localStorage);

    alert('¡Los datos se han creado correctamente!');
    mostrarJuegos();
}

function mostrarJuegos() {
    let localJuegos = Array.from(JSON.parse(localStorage.getItem('juegos')));

    document.write('<h1>Listado de juegos</h1>');
    document.write('<ul>');
    localJuegos.forEach(juego => {
        if (juego[1] == 0) {
            document.write(`<li><p>Nombre: ${juego[0]}</p>
                                <p>Precio: Gratis</p>
                                <p>Desarrolladora: ${juego[2]}</p></li><br>`);
        } else {
            document.write(`<li><p>Nombre: ${juego[0]}</p>
                                <p>Precio: ${juego[1]} €</p>
                                <p>Desarrolladora: ${juego[2]}</p></li><br>`);
        }
    });
    document.write('</ul>');
}

function buscarJuego() {
    let localJuegos = Array.from(JSON.parse(localStorage.getItem('juegos')));

    let nombre = prompt("Nombre del juego"); 
    let indice = localJuegos.findIndex((juego => juego[0] == nombre));
    document.write('<h1>Resultado de la búsqueda</h1>')

    if (localJuegos[indice][1] == 0) {
        document.write(`<ul><li><p>Nombre: ${localJuegos[indice][0]}</p>
        <p>Precio: Gratis</p>
        <p>Desarrolladora: ${localJuegos[indice][2]}</p></li><br></ul>`);
    } else {
        document.write(`<ul><li><p>Nombre: ${localJuegos[indice][0]}</p>
        <p>Precio: ${localJuegos[indice][1]} €</p>
        <p>Desarrolladora: ${localJuegos[indice][2]}</p></li><br></ul>`);
    }
}

function anadirJuego() {
    let localJuegos = Array.from(JSON.parse(localStorage.getItem('juegos')));

    let nombre = prompt("Nombre del juego");
    let precio = parseInt(prompt("Precio del juego"));
    let desarrolladora = prompt("Nombre de la empresa desarrolladora");
    nuevoJuego = [nombre, precio, desarrolladora]
    localJuegos.push(nuevoJuego);

    let juegosJSON = (JSON.stringify(localJuegos));
    localStorage.setItem('juegos', juegosJSON);
    alert('Juego añadido correctamente');
    mostrarJuegos();
}
 
function modificarJuego() {
    let localJuegos = Array.from(JSON.parse(localStorage.getItem('juegos')));

    let nombre = prompt("Nombre del juego a modificar"); 
    let indice = localJuegos.findIndex((juego => juego[0] == nombre));

    let precio = parseInt(prompt(`Modificando datos de ${localJuegos[indice][0]}\nIntroduce el precio`));
    localJuegos[indice][1] = precio;

    let desarrolladora = prompt(`Modificando datos de ${localJuegos[indice][0]}\nIntroduce la desarrolladora`);
    localJuegos[indice][2] = desarrolladora;

    let juegosJSON = (JSON.stringify(localJuegos));
    localStorage.setItem('juegos', juegosJSON);
    alert('Juego modificado correctamente');
    mostrarJuegos();
}

function eliminarJuego() {
    let localJuegos = Array.from(JSON.parse(localStorage.getItem('juegos')));

    let nombre = prompt("Introduce el nombre del juego que quieres eliminar");
    localJuegos.forEach(juego => {
        if(juego[0] == nombre) {
            let i = localJuegos.indexOf(juego);
            localJuegos.splice(i, 1);
        } 
    });

    let juegosJSON = (JSON.stringify(localJuegos));
    localStorage.setItem('juegos', juegosJSON);
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
        buscarJuego();
    break;
    case 3:
        anadirJuego();
    break;
    case 4:
        modificarJuego();
    break;
    case 5:
        eliminarJuego();
    break;
    default:
        mostrarJuegos();

}