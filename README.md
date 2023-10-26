# proyecto-informacion-repositorio-github
Una app web que te dice la informacion sobre tu primer repositorio, el nombre y fecha, mas adelante podemos implementar nuevos datos para la informacion.
# GitStarts - Buscador de Repositorios en GitHub

![GitHub](https://img.shields.io/badge/GitHub-Searcher-blue)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-Backend-green)
![Angular](https://img.shields.io/badge/Angular-Frontend-red)

GitStarts es una aplicación web que te permite buscar un usuario en GitHub y mostrar la información sobre su primer repositorio, incluyendo la fecha de creación.

## Cómo funciona

1. Ingresa el nombre de usuario de GitHub en el campo de búsqueda y presiona "Buscar".
2. La aplicación realiza una solicitud al backend de Spring Boot para buscar el primer repositorio del usuario.
3. El backend se comunica con la API de GitHub para obtener los datos del usuario y sus repositorios.
4. El backend selecciona el primer repositorio y su fecha de creación.
5. La información se envía al frontend de Angular a través de una solicitud CORS.
6. El frontend muestra el nombre del repositorio y su fecha de creación en la interfaz de usuario.

## Configuración CORS
