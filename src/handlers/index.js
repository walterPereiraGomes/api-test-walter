var express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send('David Gay!');
})

app.listen(8081, () => {
    console.log('server is running!');
})