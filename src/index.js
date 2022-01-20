var express = require("express");
const app = express();
// const purchasesRoutes = require('../src/handlers/purchases')

// app.use(purchasesRoutes);

app.get('/', (req, res) => {
    res.send('David Gay!');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('server is running!');
})