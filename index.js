const calculateButton = document.getElementById("calculate");
const moneyInput = document.getElementById("money");
const hoursInput = document.getElementById("hourlyRate");

calculateButton.addEventListener("click", function () {
    var money = parseFloat(moneyInput.value);
    var hourlyRate = parseFloat(hoursInput.value);
    var totalHours = money / hourlyRate;

    if (isNaN(money) || isNaN(hourlyRate) || hourlyRate === 0) {
        alert("Invalid input, enter valid numbers for money and hourly rate.");
        return;
    }

    let resultCalculation = totalHours / 4;
    let result1 = resultCalculation + (resultCalculation * (4 / 100))
    let result2 = resultCalculation + (resultCalculation * (2 / 100));
    let result3 = resultCalculation - (resultCalculation * (8 / 100));
    let result4 = totalHours - (result1 + result2 + result3);
    let resultsArray = [result1.toFixed(2), result2.toFixed(2), result3.toFixed(2), result4.toFixed(2)];
    document.querySelector(".resultHours").textContent = "Your hours worked: " + totalHours.toFixed(2);
    document.querySelector(".results").textContent = "Results: " + resultsArray.join(" - ");
});
