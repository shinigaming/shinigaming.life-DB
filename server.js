var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Item = require('./API/models/itemModel'), //created model loading here
    bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/shinigaminglifedb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./API/routes/itemRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Item RESTful API server started on: ' + port);