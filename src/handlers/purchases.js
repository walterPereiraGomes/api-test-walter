var express = require('express');
var purchasesRoutes = express.Router();

purchasesRoutes.get('/', (req, res) => {
    res.send('David Gay!');
})

purchasesRoutes.get('/welcome', (req, res) => {
    res.send('David Gay!');
})

module.exports = purchasesRoutes;