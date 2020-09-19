# Resumen
Dentro del tiempo aprox de entre 6 a 7 horas, arme un back y un front para el problema.

El requerimiento es algo ambiguo asi que explico el problema con el que avance una solucion.

Es un servicio que dado un string de input busca en spotify todas las canciones cuyo nombre de álbum y de artista contengan ese valor.

Para esto arme un servicio REST en la carpeta back usando NodeJS con express y un front-end usando react, ambos creados desde cero usando:

- `npm init` para el back
- `npx create-react-app` para el front

Queria llevarlos a un stack docker pero no alcancé.

## Estado del back
El back cuenta con pruebas unitarias y linter.

Le faltan las pruebas de integracion, e2e y el analisis de cobertura entre otras cosas.

Queria separar el servicio de las canciones en dos recursos rest, uno para artistas y otro para albunes pero no alcancé.

## Estado del front
Para el front tuve menos tiempo.

Busca dado un input las canciones cuyo nombre de album y de artista contienen ese valor.

Además esta paginado sin embargo no alcancé a implementar el cambio de pagina asi que se obtendrán los primeros 20 resultados a lo mucho en cada solicitud.

Le faltan validaciones, le falta una mejor separacion logica y por componentes, le faltan pruebas y linter, mejor diseño y la separación de artistas y álbunes que no alcancé a modificar en el back entre otras cosas.

Ejecuta la solicitud muestra el total de canciones conseguidas, muestra en una tabla información básica de las primeras 20 canciones encontradas.

# Uso
Para probar el proyecto se debe levantar de manera local tanto el back como el front.

Las instrucciones para esto estan en el README de cada uno.


