import {getHeroeById,getHeroesByOwner} from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe("Pruebas en 08-imp-exp.js", () => {
    test('getHeroeById() Debe retornar un heroe por id', () => {
        const id=1;
        const heroe=getHeroeById(id);
        const heroeData=heroes.find( (h) => h.id === id );
        expect(heroe).toEqual(heroeData);
    });

    test('getHeroeById() Debe retornar undefined si Heroe no existe', () => {
        const id=10;
        const heroe=getHeroeById(id);
        
        expect(heroe).toBe(undefined);
    });

    //Debes retornar un arreglo con los heroes de DC
    //owner
    //toEqual al arreglo filtrado

    test('getHeroesByOwner() Debe retornar un arreglo con los heroes de DC', () => {
        const owner='DC';
        const heroesList=getHeroesByOwner(owner);
        const heroesData=heroes.filter( (h) => h.owner === owner );
        expect(heroesList).toEqual(heroesData);
    });

    test('getHeroesByOwner() Debe retornar un arreglo de dos elementos con los heroes de Marvel', () => {
        const owner='Marvel';
        const heroesList=getHeroesByOwner(owner);
        expect(heroesList.length).toBe(2);
    });
});