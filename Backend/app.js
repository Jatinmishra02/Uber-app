const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')
const  connectToDb = require('./db/db.js')
dotenv.config();

const app = express();
app.use(cors());


connectToDb()

app.get('/',(req,res)=>{
    res.send('Hello World');
});

module.exports = app;
