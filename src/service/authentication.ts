import jwt from 'jsonwebtoken';
import { msLogger } from '../modules/logger';

const loginJWT = (req: any, res: any) => {
    const { user, password } = req.body;

    if (user === 'isalazarw' && password === 'asdqwe123') {
        const jwtData = {
            user,
            name: 'Ignacio',
            lastname: 'Salazar Williams',
            age: 27
        };

        const token = jwt.sign(jwtData, 's3cr3t0!');
        msLogger.info('201 - JWT Generated');

        const response = {
            token
        }
        res.status(201).send(response);
    } else {
        msLogger.info('401 - JWT NOT Generated');
        res.status(401).send();
    }
}

export { loginJWT };