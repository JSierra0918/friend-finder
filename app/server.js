var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({exrended: true}));
app.use(express.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);


app.listen(PORT, function(){
    console.log("App listenting on PORT: "+ PORT);
})