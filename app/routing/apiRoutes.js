//get data friend
var friends = require("../data/friend");
var matchObject = require("../data/surveyObject");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {


    //update to the api friends
    app.get("/api/survey", function (req, res) {
        res.json(friends);
    });

    app.get("/api/match", (req, res) => {
        res.json(matchObject);
    });

    //==================================================================

    //get users content
    app.post("/api/survey", function (req, res) {
        //Store new user inf
        var newFriend = req.body;
        var difference = 0;
        var matchingFriend = [];
        var bestMatch = 30;
        var surveyResults = [];

        // compare new user to friend database
        for (let i = 0; i < friends.length; i++) {
            var match = friends[i];

            // test each user's score against newFriend.
            for (let j = 0; j < newFriend.scores.length; j++) {
                var differenceTotal = 0

                difference = Math.abs(newFriend.scores[j] - match.scores[j]);
                differenceTotal += difference;
            }

            // If the best match is higher than the total difference, then that is the new best match.

            if (bestMatch >= differenceTotal) {
                bestMatch = differenceTotal;
                match.scores
                matchingFriend.push(match);
                console.log("Best Match " + bestMatch);
            }
            console.log(differenceTotal + " Person " + match.name);
        }
        // push the new user to friend.
        console.log("BEST MATCH NUMBER is " + bestMatch + " and that person is " + console.table(matchingFriend));

        //only take the last 3 matches.
        surveyResults =
         [{
                newFriend
            },
            {
                matchingFriend: matchingFriend.slice(-3, -1)
            }
        ]

        console.log(matchingFriend);
        friends.push(newFriend);
        matchObject.push(surveyResults);

        res.json(surveyResults);
    });
}