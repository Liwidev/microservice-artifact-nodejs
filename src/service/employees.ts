import { msLogger } from '../modules/logger';
<<<<<<< HEAD:src/service/employees.ts
import { mysqlClient } from '../modules/mysql';
=======
// import { mysqlClient } from '../modules/mysql';
>>>>>>> origin/master:service/employees.js

/**
 * This function comment is parsed by doctrine
 * @route GET /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const getEmployees = async (req:any, res:any) => {
    try{
<<<<<<< HEAD:src/service/employees.ts
        const connection:any = await mysqlClient();
        const [rows, fields] = await connection.query('SELECT 1 + 1 AS solution');
        connection.end();
        res.send({response: rows[0].solution});
    }catch(err){
        msLogger.error(err);
    }
=======
        // const connection:any = await mysqlClient();
        // const [rows, fields] = await connection.query('SELECT 1 + 1 AS solution');
        // connection.end();
        // res.send({response: rows[0].solution});
    }catch(err){
        msLogger.error(err);
    }
    res.send('GET Employee con nuevo metodo');
>>>>>>> origin/master:service/employees.js
}

/**
 * This function comment is parsed by doctrine
 * @route POST /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const postEmployees  = (req:any, res:any) => {
    res.send('POST Employee con nuevo metodo');
}

/**
 * This function comment is parsed by doctrine
 * @route PUT /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const putEmployees  = (req:any, res:any) => {
    res.send('PUT Employee con nuevo metodo');
}

/**
 * This function comment is parsed by doctrine
 * @route DELETE /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const deleteEmployees  = (req:any, res:any) => {
    res.send('DELETE Employee con nuevo metodo');
}