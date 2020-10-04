
const basePath = 'MsArtifact';
const options = {
    swaggerDefinition: {
        info: {
            description: 'This is a sample server',
            title: 'Swagger',
            version: '1.0.0',
        },
        host: 'localhost:3000',
        basePath:`/${basePath}`,
        produces: [
            "application/json",
            "application/xml"
        ],
        schemes: ['http', 'https'],
        securityDefinitions: {
            JWT: {
                type: 'apiKey',
                in: 'header',
                name: 'Authorization',
                description: "",
            }
        }
    },
    basedir: __dirname, //app absolute path
    files: ['../service/**/*.js'] //Path to the API handle folder
};

exports.swaggerUI = (app) => {
    const expressSwagger = require('express-swagger-generator')(app);
    expressSwagger(options);
}