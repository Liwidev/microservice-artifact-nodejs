'use strinc';
require('dotenv').config();

const express = require('express');
const app = express();
const HTTP = require('http');
const fs = require('fs');

const controllerBasePath = './controllers';
const basepath = 'MsArtifact';

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
        console.log('\n--- Setting UP < Endpoints ---')

        for(let i=0; i<API.length; i++){ // Armado de Endpoints Dinamicamente
            METHOD = API[i].config.METHOD;
            VERSION = API[i].config.VERSION;
            switch(METHOD){
                case "GET":
                    app.get(`/${basepath}/v${VERSION}/${fileName}`, API[i].method); 
                    console.log(`GET - http://localhost:${port}/${basepath}/v${VERSION}/${fileName}`)
                    break;
                case "POST":
                    app.post(`/${basepath}/v${VERSION}/${fileName}`, API[i].method);
                    console.log(`POST - http://localhost:${port}/${basepath}/v${VERSION}/${fileName}`)
                    break;
                case "PUT":
                    app.put(`/${basepath}/v${VERSION}/${fileName}`, API[i].method); 
                    console.log(`PUT - http://localhost:${port}/${basepath}/v${VERSION}/${fileName}`)
                    break;
                case "DELETE":
                    app.delete(`/${basepath}/v${VERSION}/${fileName}`, API[i].method); 
                    console.log(`DELETE - http://localhost:${port}/${basepath}/v${VERSION}/${fileName}`)
                    break;
                default:
                    console.log("METHOD NOT YET DEFINED");
            };
        };      
    });

    console.log('\nServidor NodeJS - Initializating Server...');
    const server = HTTP.createServer(app);
    server.listen(port, () => {
        console.log('Servidor NodeJS - UP');
        console.log(`El servidor esta en: http://localhost:${port}`);
    });
});


