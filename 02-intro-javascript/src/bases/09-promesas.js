import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const p1=getHeroById(2);
//         resolve(p1);
//     }, 2000);
// });
// // Then cuando se resuelve la promesa
// promesa.then(() => {
//     console.log("Then de la promesa");
// });
// // Catch cuando se rechaza la promesa
// promesa.catch(error => {
//     console.log(error);
// });
// // Finally cuando se resuelve o rechaza la promesa
// promesa.finally(() => {
//     console.log('Finalizado');
// });


const getHeroeByIdAsync = async(id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const p1=getHeroeById(id);
            if(p1){
                resolve(p1);
            }else{
                reject('No se encontro el heroe');
            }
        }, 2000);
    });
}
getHeroeByIdAsync(5)
// .then(heroe => console.log(heroe))
.then(console.log)
.catch(console.log)
.finally(() => console.log('Finalizado'));