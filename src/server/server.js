const express = require('express');
const bodyParser= require('body-parser');
const cors = require('cors');

const router= require('../router/router');
const app = express();
const corsOptions=require('../router/cors');

// app.set("port", process.env.PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors(corsOptions));
app.use(router);


module.exports=app;