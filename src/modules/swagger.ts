// tslint:disable-next-line: no-var-requires
const expressSwagger = require('express-swagger-generator');

import { msLogger } from './logger';

const basePath = 'MsArtifact';
const port = process.env.PORT || 3000;
const options = {
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
    basedir: __dirname, // app absolute path
    files: ['../service/**/*.ts' , '../models/**/*.ts'] // Path to the API handle folder
};

export const swaggerUI = (app:any) => {
    const configExpressSwagger = expressSwagger(app);
    configExpressSwagger(options);
    msLogger.info(`--- Setting UP <Swagger UI> Endpoint ---`)
    msLogger.info(`GET - http://localhost:${port}/api-docs`)
}