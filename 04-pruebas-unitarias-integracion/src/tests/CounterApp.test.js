import React from "react";
import '@testing-library/jest-dom';
import {shallow} from "enzyme";
import CounterApp from "../CounterApp";

describe("Pruebas en CounterApp.js", () => {

    let wrapper=shallow(<CounterApp/>); //Hacemos esto solo en desarrollo para no perder el intelisense.
    beforeEach(()=>{
        wrapper=shallow(<CounterApp/>);
    });

    test('Debe de mostrar <CounterApp/> correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar 100 por defecto', () => {
        const wrapper=shallow(<CounterApp value={100}/>);
        const counterText=wrapper.find('h2').text();
        expect(counterText).toBe('100');
    });

    test('Debe de incrementar con el boton de +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const counterText=wrapper.find('h2').text();
        expect(counterText).toBe('11');
        // console.log(bt1.html());
    });

    test('Debe de decrementar con el boton de -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const counterText=wrapper.find('h2').text();
        expect(counterText).toBe('9');
    });

    test('Debe de colocar el valor por defecto con el btn reset', () => {
        const wrapper=shallow(<CounterApp value={105}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText=wrapper.find('h2').text().trim();
        expect(counterText).toBe('105');
    });
});