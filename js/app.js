
const listasAlbum = [
    {nombreAlbum:'Iluminatti' , nombreArtista:'Natti Natasha'},
    {nombreAlbum:'Nattividad' , nombreArtista:'Natti Natasha'},
    {nombreAlbum:'Fantasía' , nombreArtista:'Sebastián Yastra'},
    {nombreAlbum:'Mantra' , nombreArtista:'Sebastián Yastra'},
    {nombreAlbum:'papi Juancho' , nombreArtista:'Maluma'},
    {nombreAlbum:'11:11' , nombreArtista:'Maluma'},
    {nombreAlbum:'Infinity' , nombreArtista:'Nicky Jam '},
    {nombreAlbum:'Fénix' , nombreArtista:'Nicky Jam '},
    ]
    
    const buscar = document.querySelector('#buscar');
    const boton = document.querySelector('#boton');
    const resultado = document.querySelector('#resultado');


    const filtrar = ()=>{
        resultado.innerHTML = '';
        const texto = buscar.value.toLowerCase();
        for(let lista of listasAlbum ){
           let nombre = lista.nombreAlbum.toLowerCase();
           let nombreArtista = lista.nombreArtista.toLowerCase();
           if(nombre.indexOf(texto)!== -1 ||nombreArtista.indexOf(texto)!== -1){
               resultado.innerHTML +=`
               <li>Nombre de Album: ${lista.nombreAlbum} - Artista: ${lista.nombreArtista}</li>
               `
           }
       }
       if(resultado.innerHTML==''){
           resultado.innerHTML += `
           <li>Producto no encontrado...</li>
           `
       }

    }
    boton.addEventListener('click',filtrar);