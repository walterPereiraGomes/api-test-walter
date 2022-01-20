var express = require("express");
const app = express();
const purchasesRoutes = require('../src/handlers/purchases')

app.use(purchasesRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is running!');
})