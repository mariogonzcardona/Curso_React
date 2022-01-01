const nombre   = 'Mario';
const apellido = 'Gonzalez';

const nombreCompleto = `${ nombre } ${ apellido }`;

export function getSaludo(nombre="Hunter") {
    return 'Hola ' + nombre;
}
