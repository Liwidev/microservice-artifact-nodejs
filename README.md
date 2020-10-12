# microservice-artifact-nodejs

## To-Do
* Auto generar rutas a partir de estructura de carpetas [OK]
* Agregar Versionamiento de APIs [OK]
* Generar documentacion con Swagger [OK]
* Refactory de Apigee [OK]
* Conectar a base de datos NoSQL (MongoDB) [OK]
* Migrar a Typescript [OK]
* Update de swagger request body [OK]
* Modelo de datos [OK]
* Logger [OK]
* Conectar a base de datos SQL (MySQL)
* Conectar a base de datos SQL (Postgresql)
* Healthcheck [OK - MongoDB & MS]
* Cache - Redis
* Pruebas Unitarias
* Pruebas de Performance
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

Comando de despliegue del MySQL
docker run --name mysql-server -e MYSQL_ROOT_PASSWORD=AsdQwe@123@Test -p 3306:3306 -d mysql:latest
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'AsdQwe@123@Test'

CREATE USER 'msuser'@'%' IDENTIFIED WITH mysql_native_password BY 'AsdQwe@123@Test';
GRANT USAGE ON *.* TO 'msuser'@'%';
ALTER USER 'msuser'@'%' REQUIRE NONE WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0;
GRANT ALL PRIVILEGES ON `msuser`.* TO 'msuser'@'%';
FLUSH PRIVILEGES;

CREATE DATABASE msartifact;

GRANT ALL 
ON msartifact.* 
TO msuser;

# ESTO ES UN EJEMPLO