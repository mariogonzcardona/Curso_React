import '@testing-library/jest-dom';
import { retornaArreglo } from "../../base/07-deses-arr";

describe("Pruebas en 07-deses-arr.js", () => {
    test('retornaArreglo() Debe retornar un String y un Numero', () => {
        const [letras,numeros]=retornaArreglo();
        expect(letras).toBe('ABC');
        expect(numeros).toBe(123);
    })
});