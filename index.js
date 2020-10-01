'use strinc';
require('dotenv').config();

const express = require('express');
const app = express();
const HTTP = require('http');
const fs = require('fs');
const expressSwagger = require('express-swagger-generator')(app);

const controllerBasePath = './controllers';
const basePath = 'MsArtifact';

let options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath:`/${basePath}`,
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['./service/**/*.js'] //Path to the API handle folder
};

console.log('Servidor NodeJS - Setting UP Config');
const port = process.env.PORT;

fs.readdir(controllerBasePath, (err, files) => {
    let API = undefined;
    let fileName = undefined;
    files.forEach(file => {
        let METHOD = undefined;
        let VERSION = undefined;
        fileName = file.split('.')[0]; // Se hace split del .js para hacer refencia al nombre del archivo
        API = require(`${controllerBasePath}/${fileName}`).API;
        console.log(`\n--- Setting UP <${fileName}> Endpoints ---`)

        for(let i=0; i<API.length; i++){ // Armado de Endpoints Dinamicamente
            METHOD = API[i].config.METHOD;
            VERSION = API[i].config.VERSION;
            switch(METHOD){
                case "GET":
                    app.get(`/${basePath}/v${VERSION}/${fileName}`, API[i].method); 
                    console.log(`GET - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                    break;
                case "POST":
                    app.post(`/${basePath}/v${VERSION}/${fileName}`, API[i].method);
                    console.log(`POST - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                    break;
                case "PUT":
                    app.put(`/${basePath}/v${VERSION}/${fileName}`, API[i].method); 
                    console.log(`PUT - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                    break;
                case "DELETE":
                    app.delete(`/${basePath}/v${VERSION}/${fileName}`, API[i].method); 
                    console.log(`DELETE - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                    break;
                default:
                    console.log("METHOD NOT YET DEFINED");
            };
        };      
    });

    console.log('\nServidor NodeJS - Initializating Server...');
    expressSwagger(options)
    const server = HTTP.createServer(app);
    server.listen(port, () => {
        console.log('Servidor NodeJS - UP');
        console.log(`El servidor esta en: http://localhost:${port}`);
    });
});


