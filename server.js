var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
//sets up express app
var app = express();
//initial port to 3000, or to Heroku choice
var PORT = process.env.PORT || 3000;
//data parsing by express
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//require route files 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//start server with listener

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})