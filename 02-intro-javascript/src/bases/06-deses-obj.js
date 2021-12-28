// Desestructuracion
// Asignacion desestructurante
// Destructuracion de objetos
const persona = {
    nombre: 'Mario',
    edad: 28,
    clave: 'Superman',
}

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

const useContext = ({clave,nombre,edad,rango="Lider"}) => {
    // console.log(nombre,edad,rango);
    return {
        nombreClave: clave,
        años: edad,
        latlng: {
            lat: 12.121226,
            lng: 12.121245
        }
    }
};
const {nombreClave,años,latlng:{lat,lng}}=useContext(persona);
console.log(nombreClave,años);
console.log(lat,lng);