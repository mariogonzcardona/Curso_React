// Desestructuracion de arreglos
const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,,p3] = personajes;
console.log(p3);

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
const useState = (valor) => [valor, () => {console.log('Hola Mundo')}];


const [nombre, setNombre]=useState("Hunter");
console.log(nombre);
setNombre();