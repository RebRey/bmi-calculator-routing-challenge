const bodyParser = require("body-parser");
const express = require ("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
res.sendFile(__dirname + "/bmi-calculator");
});

app.post("/", function (req, res) {

});