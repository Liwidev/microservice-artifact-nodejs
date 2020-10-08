import MongoClient from 'mongodb';
const MongoClientService = MongoClient.MongoClient;
const MONGODB_HOSTNAME=process.env.MONGODB_HOSTNAME || 'localhost';
const url = `mongodb://${MONGODB_HOSTNAME}:27017`;
const dbName = 'msartifact';

export const mongoClient = () => {
    return new Promise((resolve,reject) => {
        MongoClientService.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }, (err:any, client:any) =>{
            if(err == null){
                return resolve(client);
            }else{
                return reject(err);
            }
        });
    });
}
export const findAll = (collection:any) => {
    return new Promise((resolve, reject) => {
        collection.find({}).toArray((err:any, docs:any) => {
            if(err == null){
                return resolve(docs);
            }else{
                return reject(err);
            }
        });
    });
};