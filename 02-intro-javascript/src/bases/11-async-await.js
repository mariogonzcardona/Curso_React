
// Async Await
// const getImagenPromesa = () => new Promise(resolve => resolve('https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'));
// getImagenPromesa().then(console.log);

const getImagen=async ()=>{
    
    try {
        const apiKey="rAdDvxhMkMPCfuszdHnWwNU2PQdP5Dug"
        const respuesta=await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data}=await respuesta.json();

        const {url}=data.images.original;
        const img=document.createElement("img");
        img.src=url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
};

getImagen();

// peticion
// .then(respuesta=>respuesta.json())
// .then(({data})=>{
//     const {url}=data.images.original;
//     const img=document.createElement("img");
//     img.src=url;
//     document.body.append(img);
// })
// .catch(error=> console.log )
