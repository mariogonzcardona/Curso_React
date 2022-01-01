import React from "react";
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en PrimeraApp.js", () => {

    // test('Debe de mostrar el mensaje Hola, soy Mario', () => {
    //     const saludo="Hola, soy Mario";
    //     const {getByText}=render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();
    // });

    test('Debe de mostrar <PrimeraApp/> correctamente', () => {
        const saludo="Hola, soy Mario";
        const wrapper=shallow(<PrimeraApp saludo={saludo}/>);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar el subtitulo mostrado por props', () => {
        const saludo="Hola, soy Mario";
        const subtitulo="Soy un subtitulo";

        const wrapper=shallow(
            <PrimeraApp 
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        const textoParrafo=wrapper.find('p').text().trim();
        expect(textoParrafo).toBe(subtitulo);
    });
});