//get data friend
var friends = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {

    //update to the api friends
    app.get("/api/survey", function(req, res) {
        res.json(friends);
    });

    // app.get("/results", (req, res) => {
    //     res.json(friends);
    // });

    //==================================================================

    //get users content
    app.post("/api/survey", function(req, res) {
        //Store new user inf
        var newFriend = req.body;
        var difference = 0;
        var matchingFriend;
        // compare new user to friend database
        for (let i = 0; i < friends.length; i++) {
            var match = friends[i];
            var bestMatch = 30;
            // test each user's score against newFriend.
            for (let j = 0; j < 10; j++) {
                var differenceTotal =0
                var differenceNumber = 0;
              
                difference = Math.abs(newFriend.scores[j] - friends[i].scores[j]);
                differenceTotal += difference;
            }

            differenceNumber = differenceTotal;

            if (bestMatch > differenceNumber){
                bestMatch = differenceNumber;
                matchingFriend = match.name;
                console.log("Best Match " + bestMatch);
            }


        }

        
        console.log("BEST MATCH NUMBER is " + bestMatch + " and that person is " + matchingFriend);

        //push new user to the friend database
        // friends.push(newFriend);
        // // res.json(friends);
        // res.json(true);
        // console.log(friends);
        // console.log(`ADDED TO POST`);

        // ----------------
    
            friends.push(req.body);

            console.log(friends);
            res.json(friends);
        // console.log(newFriend);
    })
}