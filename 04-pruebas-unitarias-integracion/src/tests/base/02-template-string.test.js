import { getSaludo } from "../../base/02-template-string";

describe('Pruebas en 02-template-string.js', () => {
    test('getSaludo debe de retornar Hola Mario', () => {
        const nombre = 'Mario';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola Mario');
    })

    test('getSaludo debe de retornar Hola Hunter, si no hay argumentos en la funcion', () => {
        // const nombre = 'Hunter';
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Hunter');
    })
    
});
