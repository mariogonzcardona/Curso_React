// Objetos literales
const persona = {
    nombre: 'Hunter',
    apellido: 'Tesla',
    edad: 28,
    direccion: {
        ciudad: 'San Francisco',
        zip: 94103,
        lat: 37.7833,
        lng: -122.4167
    }

}
console.log({persona});

const persona2={...persona};
persona2.nombre='Juan';

console.log({persona});
console.log({persona2});
