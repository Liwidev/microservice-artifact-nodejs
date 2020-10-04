const mysql      = require('mysql');
const dbName = 'msartifact';
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'AsdQwe@123@Test',
  database : dbName
});

/**
 * This function comment is parsed by doctrine
 * @route GET /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.getEmployees = (req, res) => {
    /*
    try {
        connection.connect();
        connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
        });
        connection.end();
    }catch(err){
        console.error('Error de conexion');
    }
    */
    res.send('GET Employee con nueva forma de exportar');
}

/**
 * This function comment is parsed by doctrine
 * @route POST /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.postEmployees  = (req, res) => {
    res.send('POST Employee con nuevo metodo');
}

/**
 * This function comment is parsed by doctrine
 * @route PUT /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.putEmployees  = (req, res) => {
    res.send('PUT Employee con nuevo metodo');
}

/**
 * This function comment is parsed by doctrine
 * @route DELETE /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.deleteEmployees  = (req, res) => {
    res.send('DELETE Employee con nuevo metodo');
}