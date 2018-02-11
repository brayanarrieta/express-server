const express = require('express');
const bodyParser= require('body-parser');

const router= require('../router/router');
const app = express();

// app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);


module.exports=app;