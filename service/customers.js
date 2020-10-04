const { mongoClient, findAll } = require('../modules/mongodb');
const dbName = 'msartifact';
/**
 * This function comment is parsed by doctrine
 * @route GET /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.getCustomers = async (req, res) => {
    try{
        const client = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const result = await findAll(collection);
        client.close();
        res.send(result);
    }catch(err){
        res.send('ERROR');
    }
}

/**
 * This function comment is parsed by doctrine
 * @route POST /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.postCustomers = async (req, res) => {
    try{
        const { number, newText } = req.body;
        const client = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const example = {
            id: number,
            txt: newText
        }
        collection.insertOne(example);
        client.close();
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
 * @property {integer} number
 * @property {string} newText
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.putCustomers = async (req, res) => {
    try{
        const { number, newText } = req.body;
        const client = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        collection.updateOne({ id : number }, { $set: { txt : newText } });
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

exports.deleteCustomers = async (req, res) => {
    try{
        const { number } = req.body;
        const client = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        collection.deleteOne({ id : number });
    }catch(err){
        res.send('ERROR');
    }
    res.send('DELETE Customer con nuevo metodo');
}