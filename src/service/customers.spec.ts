import { getCustomers } from './customers';
import * as mongodbModule from '../modules/mongodb';
import { ResumeToken } from 'mongodb';

jest.mock('../modules/mongodb');
const mocked = mongodbModule as jest.Mocked<typeof mongodbModule>;
const mongoClient = mocked.mongoClient;
const findAll = mocked.findAll;

beforeEach(() => {
    mongoClient.mockClear();
    findAll.mockClear();
});

test("Primera prueba Jest", ()=>{
    mongoClient.mockImplementation(() => new Promise((resolve, reject) =>{
        const client = {
            db : (dbName:string) =>{
                return {
                    collection: (collectionName:string) => {
                        return collectionName;
                    }
                };
            }
        }
        resolve(client);
    }));

    findAll.mockImplementation(() => new Promise((resolve, reject) =>{
        const result = {
            value: "OK"
        }
        resolve(result);
    }));

    const req = {};
    const res = {
        send: (response:any) => {
            expect(response.value).toBe("OK");
        }
    }
    getCustomers(req,res);
});