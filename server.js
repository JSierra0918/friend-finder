var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);


// app.get("/survey", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/survey.html"));
//   });

//   // If no matching route is found default to home
//   app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/home.html"));
//   });

//   app.get("/results", function(req, res) {
//     res.sendFile(path.join(__dirname, "../public/results.html"));
//   });

app.listen(PORT, function(){
    console.log("App listenting on PORT: "+ PORT);
})