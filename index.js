"use strict"
const app = require('./bootstrap/app');
const port = process.env.PORT || 3000;

app.listen(port,function(){
    console.log('listening at port '+ port);
});