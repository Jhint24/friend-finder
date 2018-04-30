//linking data
var friendsData = require("../data/friends.js");
//exporting get function of data and POST for survey results
module.exports = function(app)    {
    //shows data to the page when visited
app.get("/api/friends", function(req, res)  {
    res.json(friendsData);
});
//pushes friends data to JS array (does this nees JSON?)
app.post("/api/friends", function(req, res)  {
    friendsData.push(req.body);
    res.json(true);
});

};
// function getMatchData() {

//     var currentUser = newMatch.scores;
//     var users = friendArray.scores;
//     console.log(currentUser + "currentUser");
//     console.log(users + "users");
//     function diffArrays(arr1, arr2) {
//       var grandTotal = 0;
    
//       for (var i = 0; i < 5; i++) {
//         var score = arr1[i] - arr2[i];
//         grandTotal += score;
//       }
//       return grandTotal;
//     }
    
//     const compArr = [];
    
//     for (var i = 0; i < users.length; i++) {
//       const iNeedLove = diffArrays(currentUser, users[i]);
//       compArr.push(iNeedLove);
//     }
//     console.log(compArr);
    
          // Then display in modal
                // $("#matchName").text(currentUser.name);
                // $('#matchPic').attr("src", currentUser.photo);
    // }