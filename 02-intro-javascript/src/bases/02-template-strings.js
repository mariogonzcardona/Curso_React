// Tempalte strings
const nombre = 'Mario';
const apellido = 'Gonzalez';

const nombreCompleto = `${nombre} ${apellido}`;
console.log(nombreCompleto);

// Funciones
function getSaludo(nombre) {
    return `Hola ${nombre}`;
}

console.log(`Este es un texto ${getSaludo (nombreCompleto)}`);