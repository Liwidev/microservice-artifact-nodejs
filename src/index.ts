import dotenv from "dotenv";
import express from 'express';
import HTTP from "http";
import { generateAPI } from './modules/apiGenerator';
import { msLogger } from './modules/logger';
import { swaggerUI } from './modules/swagger';

dotenv.config();

let app:any = express();
const port:string = process.env.PORT || "3000";
const env:string = process.env.NODE_ENV || 'development';

(async () => {
    try{
        msLogger.info('Servidor NodeJS - Setting UP Config');
        // Api generator
        app.use(express.json())
        app = await generateAPI(app);
        msLogger.info('Servidor NodeJS - Initializating Server...');
        // Modulo de Swagger
        env === 'development' ? swaggerUI(app) : msLogger.info("Swagger Production MODE");
        const server = HTTP.createServer(app);
        server.listen(port, () => {
            msLogger.info('Servidor NodeJS - UP');
            msLogger.info(`El servidor est en: http://localhost:${port}`);
        });
    }catch(err){
        msLogger.error(err);
    }
})();
