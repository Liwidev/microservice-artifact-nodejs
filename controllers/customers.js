const API = [
    {
        config: {
            METHOD: "GET",
            VERSION: 1
        },
        method: (req, res) => {
            res.send('GET Customer');
        }
    },
    {
        config: {
            METHOD: "POST",
            VERSION: 1
        },
        method: (req, res) => {
            res.send('Create Customer');
        }
    },
    {
        config: {
            METHOD: "PUT",
            VERSION: 1
        },
        method: (req, res) => {
            res.send('UPDATE Customer');
        }
    },
    {
        config: {
            METHOD: "DELETE",
            VERSION: 1
        },
        method: (req, res) => {
            res.send('DELETE Customer');
        }
    }
];

module.exports = { API };