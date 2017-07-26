"use strict"

const bodyParser = require('body-parser');
const router = require('./../router/router');
const cors = require('cors');

module.exports = function(app){

    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.get('', function (req, res) { res.json('Todo API'); })
    app.use('/api/v1', router);
}



