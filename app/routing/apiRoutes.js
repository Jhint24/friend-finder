//linking data
var friendsData = require("../data/friends.js");
//exporting get function of data and POST for survey results
module.exports = function(app)    {
    //shows data to the page when visited
app.get("/api/friends", function(req, res)  {
    res.json(friendsData);
});
//pushes friends data to JS array (does this nees JSON?)
app.post("api/friends", function(req, res)  {
    friendsData.push(req.body);
    res.json(true);
});

};