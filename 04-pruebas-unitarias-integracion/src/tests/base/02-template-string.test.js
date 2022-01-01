import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
    test('getSaludo() Debe retornar hola Mario', () => {
        const nombre = 'Mario';
        const saludo=getSaludo(nombre);
        expect(saludo).toBe('Hola ' + nombre);
    })

    test('getSaludo() Debe retornar hola Hunter', () => {
        const saludo=getSaludo();
        expect(saludo).toEqual('Hola Hunter');
    })
});