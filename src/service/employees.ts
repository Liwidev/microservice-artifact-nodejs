/**
 * This function comment is parsed by doctrine
 * @route GET /v1/employees
 * @group Employees - Operaciones relaciados a los empleados
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

export const getEmployees = (req:any, res:any) => {
    res.send('GET Employee con nueva forma de exportar');
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