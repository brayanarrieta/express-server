const options= {
    "allowedHeaders": ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 200
}

module.exports=options;