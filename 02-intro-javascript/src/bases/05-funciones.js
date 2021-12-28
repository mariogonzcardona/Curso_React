// Funciones en javascript
// const saludar=function(nombre) {
//     return `Hola ${nombre}`
// }

const saludar2=(nombre)=>{
    return `Hola ${nombre}`
}

const saludar3=nombre=>`Hola ${nombre}`

const saludar4=()=>`Hola Mundo`

// console.log(saludar);
console.log(saludar2('Mario'));
console.log(saludar3('Mario Gonzalez'));
console.log(saludar4());

const getUser=()=>({
    uid:'ABC123',
    username:'mario'
});
const user=getUser();
console.log(user);

const getUsuarioActivo=(nombre) =>({
    uid:'ABC567',
    username:nombre
});


const usuarioActivo=getUsuarioActivo('Mario');
console.log(usuarioActivo);