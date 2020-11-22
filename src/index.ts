import dotenv from "dotenv";
dotenv.config();
import express from 'express';
import ws from 'express-ws';
import HTTP from "http";
import { msLogger } from './modules/logger';
import { healthCheckAPI } from './modules/healthcheck';
import { generateAPI } from './modules/apiGenerator';
import { swaggerUI } from './modules/swagger';

let app: any = express();
const server = HTTP.createServer(app);
ws(app, server); // Added Websocket capability to Express

const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'development';
(async () => {
    try {
        msLogger.info('Servidor NodeJS - Setting UP Config');
        // Api generator
        app.use(express.json())
        app = await generateAPI(app);
        // Modulo de Swagger
        env === 'development' ? swaggerUI(app) : msLogger.info("Swagger Production MODE");
        // Modulo de Healthcheck
        app = await healthCheckAPI(app);
        msLogger.info('Servidor NodeJS - Initializating Server...');
        // app.listen(port);
        server.listen(port, () => {
            msLogger.info('Servidor NodeJS - UP');
            msLogger.info(`El servidor est en: http://localhost:${port}`);
        });
    } catch (err) {
        msLogger.error(err);
    }
})();

