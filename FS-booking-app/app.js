// const path = require('path');

const express = require('express');
const bodyparser= require('body-parser');

// const axios= require('axios');
const app = express();
var cors = require('cors');

const userRoutes = require('./routes/user');
const sequelize= require('./util/database');


app.use(cors());
app.use(bodyparser.json({ extended: false}));
app.use('/users', userRoutes)
 
sequelize.sync().then(result =>{
    app.listen(4000);
})
.catch(err =>{
    console.log(err);
})