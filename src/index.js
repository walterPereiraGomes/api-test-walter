var express = require("express");
const app = express();
const purchasesRoutes = require('../src/handlers/purchases')

app.use(purchasesRoutes);

app.listen(8081, () => {
    console.log('server is running!');
})