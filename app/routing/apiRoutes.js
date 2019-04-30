//get data friend
var friends = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app){

    //update to the api friends
    app.get("/api/survey", (req, res) => {
        res.json(friends);
    });

    app.get("/results", (req, res) => {
        res.json(friends);
    });
//==================================================================
 
    //get users content
    app.post("/api/survey", (req, res) => {
        friends.push(req.body);
        res.json();
        console.log(`ADDED TO POST`);
        console.log(friends);
    })
}