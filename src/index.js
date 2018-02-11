const app=require('./server/server');
const config=require('./config');
app.set("port",config.port);
app.listen(config.port,function () {
    console.log("Server is running on port",app.get('port'));
});