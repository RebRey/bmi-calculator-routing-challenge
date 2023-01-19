# bmi-calculator-routing-challenge

## Objective
Turn the previous BMI calculator code I wrote into a real website using npm and express.

## Directions
1) Create a new file called bmi-calculator.html
* add the HTML boilerplate and set the page title to BMI Calculator.
* add an HTML form, this form will make a post request to the server at the route /bmi-calculator.
* The form will have two inputs, weight and height with a placeholder text that will tell the user what they should type into which text box.
* Add a button which says "Calculate BMI"
2) Add the get and post methods for the /bmi-calculator route into the server.js file.
3) Use sendFile() to send the bmi-calculator.html page as a response inside the get method.
4) Add an h1 that says BMI Calculator
5) Inside server.js, create 2 variables one for weight and one for height.
6) Use the BMI calculator code you wrote perviously, or write some new code to calculate and send back the results as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on the weight and height inputs.