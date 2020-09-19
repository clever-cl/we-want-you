# Uso 
Este servicio fue implementado usando node.

Es necesario tener instalado node.

Debe usarse desde el directorio del proyecto back:

`/solution/back`

Se deben instalar las dependencias del proyecto usando:

`npm i`

Y para ejecutarlo se usa:

`npm start`

El proyecto escuchara solicitudes a localhost en el puerto 8080.

Y el uri para el método GET implementado es: 

`/v1/songs/:albumOrArtist`

Donde albumOrArtist es el valor a buscar.

Además el url puede recibir los valores para la paginación offset y limit.

Ejemplo completo de un url:

`http://localhost:8080/v1/songs/elvis?offset=0&limit=20`

## Tests
Para ejecutar las pruebas unitarias usar:

`npm run test`

Para ejecutar el linter usar:

`npm run lint`