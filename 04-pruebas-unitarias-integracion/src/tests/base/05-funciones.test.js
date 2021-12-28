import { getUser,getUsuarioActivo } from "../../base/05-funciones";
describe("Pruebas en 05-funciones.js",()=>{
    test('getUser debe de retornar un objeto', () => {
        const userTest={
            uid: 'ABC123',
            username: 'Hunter_Tesla'
        };
        const user = getUser();
        expect(user).toEqual(userTest);
        console.log(user);
    })

    // getUserActivo deve de retornar un objeto
    test('getUserActivo debe de retornar un objeto', () => {
        const nombre='Hunter';
        const userTest={
            uid: 'ABC567',
            username: nombre
        };
        const user = getUsuarioActivo(nombre);
        expect(user).toEqual(userTest);
    })
});