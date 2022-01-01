import '@testing-library/jest-dom';
import { getUser,getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas en 05-funciones.js", () => {
    test('getUser() Debe retornar un Objeto', () => {
        const userTest={
            uid: 'ABC123',
            username: 'Hunter_Tesla'
        }
        const user=getUser();
        expect(userTest).toEqual(user);
    })

    test('getUsuarioActivo() Debe retornar un Objeto', () => {
        const nombre='Hunter_Tesla';
        
        const user=getUsuarioActivo(nombre);
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
});