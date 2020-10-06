import mysql from 'mysql2/promise';
import { msLogger } from '../modules/logger';

const dbName = 'msartifact';
const options = {
  host     : 'localhost',
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