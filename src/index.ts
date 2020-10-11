import dotenv from "dotenv";
<<<<<<< HEAD
dotenv.config();
import express from 'express';
import HTTP from "http";
import { msLogger } from './modules/logger';
import { healthCheckAPI } from './modules/healthcheck';
import { generateAPI } from './modules/apiGenerator';
import { swaggerUI } from './modules/swagger';
import os from 'os';
let app:any = express();
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
=======
import express from 'express';
import HTTP from "http";
import { generateAPI } from './modules/apiGenerator';
import { msLogger } from './modules/logger';
import { swaggerUI } from './modules/swagger';

dotenv.config();

let app:any = express();
const port:string = process.env.PORT || "3000";
const env:string = process.env.NODE_ENV || 'development';

>>>>>>> origin/master
(async () => {
    try{
        msLogger.info('Servidor NodeJS - Setting UP Config');
        // Api generator
        app.use(express.json())
        app = await generateAPI(app);
<<<<<<< HEAD
        // Modulo de Swagger
        env === 'development' ? swaggerUI(app) : msLogger.info("Swagger Production MODE");
        // Modulo de Healthcheck
        app = await healthCheckAPI(app);

        msLogger.info('Servidor NodeJS - Initializating Server...');
=======
        msLogger.info('Servidor NodeJS - Initializating Server...');
        // Modulo de Swagger
        env === 'development' ? swaggerUI(app) : msLogger.info("Swagger Production MODE");
>>>>>>> origin/master
        const server = HTTP.createServer(app);
        server.listen(port, () => {
            msLogger.info('Servidor NodeJS - UP');
            msLogger.info(`El servidor est en: http://localhost:${port}`);
<<<<<<< HEAD
            msLogger.info(`Default process.env.MONGODB_HOSTNAME: ${process.env.MONGODB_HOSTNAME}`)
=======
>>>>>>> origin/master
        });
    }catch(err){
        msLogger.error(err);
    }
})();
