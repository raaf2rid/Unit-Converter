let inputEl = document.getElementById("input-value")

let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")



function calcResult() {
    
    let userInput = inputEl.value
    
    // LENGTH-CONVERSION
    
    let meterToFeet = (userInput  * 3.2808).toFixed(3)
    let feetToMeter = (userInput  / 3.2808).toFixed(3)
    
    // VOLUME-CONVERSION
    
    let literToGallon = (userInput / 3.7854).toFixed(3)
    let galonToLiter = (userInput  * 3.7854).toFixed(3)
    
    // MASS-CONVERSION
    
    let kiloToPound = (userInput * 2.2046).toFixed(3)
    let poundToKilo = (userInput / 2.2046).toFixed(3)
    
    // Calculation
    
   lengthEl.textContent = `${userInput} meters = ${meterToFeet} feet | ${userInput} feet = ${feetToMeter} meters`;
   volumeEl.textContent = `${userInput} liters = ${literToGallon} gallons | ${userInput} gallons = ${galonToLiter} liters`;
   massEl.textContent = `${userInput} kilos = ${kiloToPound} pounds | ${userInput} pounds = ${poundToKilo} kilos`;

}
inputEl.addEventListener("input", calcResult)
// console.log(inputEl)