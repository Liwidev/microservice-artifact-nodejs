const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';
const dbName = 'msartifact';

exports.mongoClient = () => {
    return new Promise((resolve,reject) => {
        MongoClient.connect(url, function(err, client) {
            if(err == null){
                return resolve(client);
            }else{
                return reject(err);
            }
        });
    });
}
    
exports.findAll = (collection) => {
    return new Promise((resolve, reject) => {
        collection.find({}).toArray(function(err, docs) {
            if(err == null){
                return resolve(docs);
            }else{
                return reject(err);
            }
        });
    });
};