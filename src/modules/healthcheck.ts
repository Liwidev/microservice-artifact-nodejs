import { mongoClient } from './mongodb';
import { msLogger } from './logger';
import { mysqlClient } from '../modules/mysql';
import os from 'os';

const port = process.env.PORT || 3000;
const dbName = 'msartifact';
const healtcheckMongoDB = async () => {
    try{
        const client:any = await mongoClient();
        client.close();
        return {status: true, err: ""};
    }catch(err){
        return {status: false, err};
    }
}

const healtcheckMysql = async () => {
    try{
        const connection:any = await mysqlClient();
        connection.end();
        return {status: true, err: ""};
    }catch(err){
        return {status: false, err};
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
        serviceName: 'MongoDB',
        status: mongodb.status ? "OK": "NOTOK",
        dbName,
        error: mongodb.err,
        timestamp: Date.now()
    });

    // Mysql Test
    const mysqldb = await healtcheckMysql();
    response.push({
        serviceName: 'Mysql',
        status: mysqldb.status ? "OK": "NOTOK",
        dbName,
        error: mysqldb.err,
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