import mysql from 'mysql2/promise';
import { msLogger } from '../modules/logger';
const MYSQL_HOSTNAME=process.env.MYSQL_HOSTNAME || 'localhost';

const dbName = 'msartifact';
const options = {
  host     : MYSQL_HOSTNAME,
  user     : 'msuser',
  password : 'AsdQwe@123@Test',
  database : dbName,
  insecureAuth : true
};

export const mysqlClient = () => {
    return new Promise(async (resolve,reject) =>{
        try {
            const connection = await mysql.createConnection(options);
            return resolve(connection);
        }catch(err){
            return reject(err);
        }
    });
}