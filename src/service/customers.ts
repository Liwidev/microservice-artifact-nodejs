import { mongoClient, findAll } from '../modules/mongodb';
// import { Product } from '../models/Product';
const dbName = 'msartifact';

/**
 * This function comment is parsed by doctrine
 * @route GET /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const getCustomers = async (req:any, res:any) => {
    try{
        const client:any = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const result = await findAll(collection);
        client.close();
        res.send(result);
    }catch(err){
        res.send(err);
    }
}

/**
 * This function comment is parsed by doctrine
 * @route POST /v1/customers
 * @param {Point.model} point.body.required - the new point
 * @group Customer - Operaciones relacionadas a los cliente
 * @operationId retrieveFooInfo
 * @produces application/json application/xml
 * @consumes application/json application/xml
 * @returns {Response.model} 200 - An array of user info
 * @returns {Product.model}  default - Unexpected error
 * @returns {Array.<Point>} Point - Some description for point
 * @headers {integer} 200.X-Rate-Limit - calls per hour allowed by the user
 * @headers {string} 200.X-Expires-After -  date in UTC when token expires
 */

export const postCustomers = async (req:any, res:any) => {
    try{
        const { newID, newText } = req.body;
        const client:any = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const example = {
            id: newID,
            txt: newText
        }
        collection.insertOne(example);
        //client.close(); // TO-DO FIX ASYNC CALL
        res.send(example);
    }catch(err){
        res.send('ERROR');
    }

}

/**
 * This function comment is parsed by doctrine
 * @route PUT /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @typedef Point
 * @property {integer} newID
 * @property {string} newText
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const putCustomers = async (req:any, res:any) => {
    try{
        const { newID, newText } = req.body;
        const client:any = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        collection.updateOne({ id : newID }, { $set: { txt : newText } });
    }catch(err){
        res.send('ERROR');
    }
    res.send('PUT Customer con nuevo metodo');
}

/**
 * This function comment is parsed by doctrine
 * @route DELETE /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const deleteCustomers = async (req:any, res:any) => {
    try{
        const { newID } = req.body;
        const client:any = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        collection.deleteOne({ id : newID });
    }catch(err){
        res.send('ERROR');
    }
    res.send('DELETE Customer con nuevo metodo');
}