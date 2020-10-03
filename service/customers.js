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
        const client = await mongoClient();
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const example = {
            id: Math.floor(Math.random() * 10),
            txt: "Esto es un ejemplo"
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
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.putCustomers = (req, res) => {
    res.send('PUT Customer con nuevo metodo');
}

/**
 * This function comment is parsed by doctrine
 * @route DELETE /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.deleteCustomers = (req, res) => {
    res.send('DELETE Customer con nuevo metodo');
}