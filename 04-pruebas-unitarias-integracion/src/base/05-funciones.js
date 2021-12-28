const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo`;

const getUser = () => ({
        uid: 'ABC123',
        username: 'Hunter_Tesla'
});

const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

export { getUser, getUsuarioActivo };



