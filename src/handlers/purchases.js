var express = require('express');
var purchasesRoutes = express.Router();

purchasesRoutes.get('/', (req, res) => {
    res.send('initial test!');
})

purchasesRoutes.get('/welcome', (req, res) => {
    res.send('test welcome!');
})

module.exports = purchasesRoutes;