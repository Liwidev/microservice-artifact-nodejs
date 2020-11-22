import fs from 'fs';
import { msLogger } from '../modules/logger';
const basePath = 'MsArtifact';
const controllerBasePath = 'controllers';
const port = process.env.PORT || 3000;

export const generateAPI = (app: any) => {
    return new Promise((resolve, reject) => {
        fs.readdir(`./src/${controllerBasePath}`, (err, files) => {
            if (err != null) reject(err);
            try {
                let API;
                let fileName;
                files.forEach((file) => {
                    let METHOD;
                    let VERSION;
                    fileName = file.split('.')[0]; // Se hace split del .js para hacer refencia al nombre del archivo
                    API = require(`../${controllerBasePath}/${fileName}`).API;
                    msLogger.info(`--- Setting UP <${fileName}> Endpoints ---`)

                    for (const endpoint of API) { // Armado de Endpoints Dinamicamente
                        METHOD = endpoint.config.METHOD;
                        VERSION = endpoint.config.VERSION;
                        switch (METHOD) {
                            case "GET":
                                app.get(`/${basePath}/v${VERSION}/${fileName}`, endpoint.method);
                                msLogger.info(`GET - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`);
                                break;
                            case "POST":
                                app.post(`/${basePath}/v${VERSION}/${fileName}`, endpoint.method);
                                msLogger.info(`POST - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            case "PUT":
                                app.put(`/${basePath}/v${VERSION}/${fileName}`, endpoint.method);
                                msLogger.info(`PUT - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            case "DELETE":
                                app.delete(`/${basePath}/v${VERSION}/${fileName}`, endpoint.method);
                                msLogger.info(`DELETE - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            case "WS":
                                msLogger.info(endpoint.method);
                                app.ws(`/${basePath}/v${VERSION}/${fileName}`, endpoint.method);
                                msLogger.info(`WS - ws://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            default:
                                msLogger.info("METHOD NOT YET DEFINED");
                        };
                    };
                });
                return resolve(app);
            } catch (err) {
                return reject(err);
            }

        });
    });
}