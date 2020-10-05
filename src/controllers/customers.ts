import { getCustomers, postCustomers, deleteCustomers, putCustomers  } from '../service/customers';

export const API = [
    {
        config: {
            METHOD: "GET",
            VERSION: 1
        },
        method: getCustomers
    },
    {
        config: {
            METHOD: "POST",
            VERSION: 1
        },
        method: postCustomers
    },
    {
        config: {
            METHOD: "PUT",
            VERSION: 1
        },
        method: putCustomers
    },
    {
        config: {
            METHOD: "DELETE",
            VERSION: 1
        },
        method: deleteCustomers
    }
];