# microservice-artifact-nodejs

## To-Do
* Auto generar rutas a partir de estructura de carpetas [OK]
* Agregar Versionamiento de APIs [OK]
* Generar documentacion con Swagger [OK]
* Pruebas Unitarias
* Conectar a base de datos SQL y NoSQL (MongoDB)
* Pruebas de Performance
* Modelo de datos
* Validacion JSON request
* Captura de errores
* Modulo Kafka (Event-driven-communication)
* Yeoman - Generador de arquetipos
* TDD - Test driven development
* DDD

## Estructura de URL
Ejemplo extraido desde [aquí](https://www.sqlitetutorial.net/sqlite-sample-database/)

![](https://cdn.sqlitetutorial.net/wp-content/uploads/2015/11/sqlite-sample-database-color.jpg)

## Docker Scripts
Comando de despliegue de SQL Server
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=AsdQwe@123@Test" -p 1433:41433 --name sql-server -d mcr.microsoft.com/mssql/server:2019-latest

Comando de despliegue del MongoDB
docker run --name mongodb -p 27017:27017 -d mongo:latest