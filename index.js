'use strinc';
require('dotenv').config();

const express = require('express');
let app = express();
const HTTP = require('http');
const { generateAPI } = require('./modules/apiGenerator');
const { swaggerUI } = require('./modules/swagger');
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
(async () => {
    try{
        console.log('Servidor NodeJS - Setting UP Config');
        //Api generator
        app.use(express.json())
        app = await generateAPI(app);
        console.log('\nServidor NodeJS - Initializating Server...');
        //Modulo de Swagger
        env == 'development' ? swaggerUI(app) : console.log("Swagger Production MODE");
        const server = HTTP.createServer(app);
        server.listen(port, () => {
            console.log('Servidor NodeJS - UP');
            console.log(`El servidor est en: http://localhost:${port}`);
        });
    }catch(err){
        console.error(err);
    }
})();
