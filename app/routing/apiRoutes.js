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

    app.get("/matches", (req, res) => {
        res.json(friends);
    });
//==================================================================
 
    //get users content
    app.post("/api/survey", (req, res) => {
        //Store new user info
        var newFriend = req.body;
        //compare new user to friend database
        for (let i = 0; i < friends.length; i++) {
            // test each user's score against newFriend.
            for (let j = 0; j < newFriend.scores.length; j++) {
                var difference = 0;
                var totalDifference = [];
                var match  = []
                difference = Math.abs(newFriend.scores - friends.scores[j]);
                
                
            }
        }
        res.json();
        //push new user to the friend database
        friends.push(req.body);
        console.log(`ADDED TO POST`);
    })
}