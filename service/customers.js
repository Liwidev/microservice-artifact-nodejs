/**
 * This function comment is parsed by doctrine
 * @route GET /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.getCustomers = (req, res) => {
    res.send('GET Custome con nueva forma de exportar');
}

/**
 * This function comment is parsed by doctrine
 * @route POST /v1/customers
 * @group Customer - Operaciones relacionadas a los cliente
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

exports.postCustomers = (req, res) => {
    res.send('POST Customer con nuevo metodo');
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