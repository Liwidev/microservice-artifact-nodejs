import { getCustomers } from './customers';
import * as mongodbModule from '../modules/mongodb';

jest.mock('../modules/mongodb');
const mocked = mongodbModule as jest.Mocked<typeof mongodbModule>;
const {mongoClient, findAll} = mocked;

beforeEach(() => {
    mongoClient.mockClear();
    findAll.mockClear();
});

test("Customer - getCustomers() - Success 200 - Happy Path", async ()=>{
    // Prepare TEST with Mocks
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
        return resolve(client);
    }));

    findAll.mockImplementation(() => new Promise((resolve, reject) =>{
        const result = {
            value: "OK"
        }
        return resolve(result);
    }));

    const req = {};
    const res = {
        status: (code:number) => {
            return {
                send: (response:any) =>  {
                    expect(code).toBe(200);
                    expect(response.value).toBe("OK");
                }
            }
        }
    }
    await getCustomers(req,res);
});

test("Customer - getCustomers() - Failure 500 - MongoDB Server Down", async ()=>{
    // Prepare TEST with Mocks
    mongoClient.mockImplementation(() => new Promise((resolve, reject) =>{
        return reject("Esto es un error de prueba");
    }));

    const req = {};
    const res = {
        status: (code:number) => {
            return {
                send: (response:any) =>  {
                    expect(code).toBe(500);
                    expect(response).toBe("Esto es un error de prueba");
                }
            }
        }
    }
    await getCustomers(req,res);
});

test("Customer - getCustomers() - Failure 500 - DB Name doesn't exist", async ()=>{
    // Prepare TEST with Mocks
    mongoClient.mockImplementation(() => new Promise((resolve, reject) =>{
        const client = {
            db : (dbName:string) =>{
                throw new Error('No existe DB');
            }
        }
        return resolve(client);
    }));

    const req = {};
    const res = {
        status: (code:number) => {
            return {
                send: (response:any) =>  {
                    expect(code).toBe(500);
                    expect(response.message).toBe("No existe DB");
                }
            }
        }
    }
    await getCustomers(req,res);
});

test("Customer - getCustomers() - Failure 500 - Collection doesn't exist", async ()=>{
    // Prepare TEST with Mocks
    mongoClient.mockImplementation(() => new Promise((resolve, reject) =>{
        const client = {
            db : (dbName:string) =>{
                return {
                    collection: (collectionName:string) => {
                        throw new Error("Collection no existe");
                    }
                };
            }
        }
        return resolve(client);
    }));

    const req = {};
    const res = {
        status: (code:number) => {
            return {
                send: (response:any) =>  {
                    expect(code).toBe(500);
                    expect(response.message).toBe("Collection no existe");
                }
            }
        }
    }
    await getCustomers(req,res);
});

test("Customer - getCustomers() - Failure 500 - FindAll Method error", async ()=>{
    // Prepare TEST with Mocks
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
        return resolve(client);
    }));

    findAll.mockImplementation(() => new Promise((resolve, reject) =>{
        return reject("FindAll Error");
    }));

    const req = {};
    const res = {
        status: (code:number) => {
            return {
                send: (response:any) =>  {
                    expect(code).toBe(500);
                    expect(response).toBe("FindAll Error");
                }
            }
        }
    }
    await getCustomers(req,res);
});
