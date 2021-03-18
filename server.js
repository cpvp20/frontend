const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const path = require('path')

app.use(express.json());

app.use(express.static(__dirname + "/home"));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
