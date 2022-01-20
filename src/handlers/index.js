var express = require("express");
const app = express();
const purchasesRoutes = require('./purchases')

const start = () => {
    app.use(purchasesRoutes);

    const port = process.env.PORT || 8081
    
    app.listen(port, () => {
        console.log('server is running!');
    })
}

module.exports = {
    start
};