// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if (mass===0 || height===0) {
        return "INVALID INPUT"
    }
    var BMI;
    BMI = mass/(height*height);
    return BMI

}
let mass = parseInt(readline());
let height = parseInt(readline());

console.out(BMICalculator(mass, height))
module.exports = BMICalculator;
