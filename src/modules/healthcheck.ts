import { mongoClient } from './mongodb';
import { msLogger } from './logger';
import os from 'os';

const port = process.env.PORT || 3000;
const dbName = 'msartifact';
const healtcheckMongoDB = async () => {
    try{
        const client:any = await mongoClient();
        client.close();
        return {status: true, err: ""};
    }catch(err){
        return {status: false, err: ""};
    }
}

const healthcheckMs = () => {
    const healthcheck = {
        status: 'OK',
        uptime: process.uptime(),
        cpus: os.cpus(),
        totalMem: os.totalmem(),
        freeMem: os.freemem(),
		timestamp: Date.now()
    };
    return healthcheck;
}

const healtCheckService = async (req:any, res:any) => {
    const response:any = [];

    // MongoDB Test
    const mongodb = await healtcheckMongoDB();
    response.push({
        status: mongodb.status ? "OK": "NOTOK",
        dbName,
        error: mongodb.err,
        timestamp: Date.now()
    });

    // MS Test
    response.push(healthcheckMs());
    res.send(response);
}


export const healthCheckAPI = (app:any) =>{
    msLogger.info(`--- Setting UP <HealthCheck> Endpoint ---`)
    msLogger.info(`GET - http://localhost:${port}/healthcheck`)
    app.get('/healthcheck', healtCheckService);

    return app;
}