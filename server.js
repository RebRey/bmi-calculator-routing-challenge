const bodyParser = require("body-parser");
const express = require ("express");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// Calculator App
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    // number converts the text input to numbers
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("The result of the calculation is " + result);
});

app.listen(port, function () {
    console.log("Sever started successfully on port 3000.");
  });

// BMI Calculator App

app.get("/bmi-calculator", function(req,res){
    res.sendFile(__dirname + "/bmi-calculator.html");
});

app.post("/bmi-calculator", function(req, res) {
    // parseFloat converts the text input into decimal numbers
var weight = parseFloat(req.body.weight);
var height = parseFloat(req.body.height);
var bmi = (weight / (Math.pow(height, 2) / 10000)).toFixed(2);
res.send("Your BMI is " + bmi +".");
});
