"use strict"

require('dotenv').config();

const dbConfig = require('./db');
const expressConfig = require('./express');
const router = require('./router/router.js')
module.exports = function(app){
    expressConfig(app);
    dbConfig();
    app.use(router);
}