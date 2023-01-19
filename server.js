const bodyParser = require("body-parser");
const express = require ("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/bmi-calculator");
});

app.post("/", function (req, res){
});

app.get("/bmi-calculator", function(req,res){
    res.sendFile(__dirname + "/bmi-calculator");
});

app.listen(port, function(){
console.log("Server is running on port 3000.");
});