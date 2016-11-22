var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use(function (req, res, next){
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Methods", "GET");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.get("/", function(req, res){
    var ip = req.headers["x-forwarded-for"];
    var lang = req.headers["accept-language"].split(",")[0];
    var soft = req.headers["user-agent"].split(") ")[0].split(" (")[1];
    var full = {
        "ipadress": ip,
        "language": lang,
        "software": soft
    };
    res.send(full);
});

app.listen(port, function(){
   console.log("Listening on port " + port);
});