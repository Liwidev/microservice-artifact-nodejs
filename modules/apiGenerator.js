const fs = require('fs');
const basePath = 'MsArtifact';
const controllerBasePath = 'controllers';
const port = process.env.PORT || 3000;

exports.generateAPI = (app) =>{
    return new Promise((resolve, reject) => {
        fs.readdir(`./${controllerBasePath}`, (err, files) => {
            if(err!=null) reject(err);
            try{
                let API = undefined;
                let fileName = undefined;
                files.forEach(file => {
                    let METHOD = undefined;
                    let VERSION = undefined;
                    fileName = file.split('.')[0]; // Se hace split del .js para hacer refencia al nombre del archivo
                    API = require(`../${controllerBasePath}/${fileName}`).API;
                    console.log(`\n--- Setting UP <${fileName}> Endpoints ---`)
            
                    for(let i=0; i<API.length; i++){ // Armado de Endpoints Dinamicamente
                        METHOD = API[i].config.METHOD;
                        VERSION = API[i].config.VERSION;
                        switch(METHOD){
                            case "GET":
                                app.get(`/${basePath}/v${VERSION}/${fileName}`, API[i].method); 
                                console.log(`GET - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            case "POST":
                                app.post(`/${basePath}/v${VERSION}/${fileName}`, API[i].method);
                                console.log(`POST - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            case "PUT":
                                app.put(`/${basePath}/v${VERSION}/${fileName}`, API[i].method); 
                                console.log(`PUT - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            case "DELETE":
                                app.delete(`/${basePath}/v${VERSION}/${fileName}`, API[i].method); 
                                console.log(`DELETE - http://localhost:${port}/${basePath}/v${VERSION}/${fileName}`)
                                break;
                            default:
                                console.log("METHOD NOT YET DEFINED");
                        };
                    };    
                });
                return resolve(app);
            }catch(err){
                return reject(err);
            }
            
        });
    });
}
