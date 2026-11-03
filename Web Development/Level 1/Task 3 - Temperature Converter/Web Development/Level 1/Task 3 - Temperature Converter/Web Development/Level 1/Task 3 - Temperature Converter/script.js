function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const resultElement = document.getElementById("result");

    if (document.getElementById("temperature").value.trim() === "") {
        resultElement.textContent = "Please enter a temperature!";
        return;
    }

    if (temperature < -273.15 && fromUnit === "celsius") {
        resultElement.textContent = "Temperature cannot be below absolute zero!";
        return;
    }

    if (temperature < -459.67 && fromUnit === "fahrenheit") {
        resultElement.textContent = "Temperature cannot be below absolute zero!";
        return;
    }

    if (temperature < 0 && fromUnit === "kelvin") {
        resultElement.textContent = "Kelvin cannot be negative!";
        return;
    }

    let celsius;

    // Convert input to Celsius
    if (fromUnit === "celsius") {
        celsius = temperature;
    } else if (fromUnit === "fahrenheit") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    let convertedTemperature;

    // Convert Celsius to selected unit
    if (toUnit === "celsius") {
        convertedTemperature = celsius;
    } else if (toUnit === "fahrenheit") {
        convertedTemperature = (celsius * 9 / 5) + 32;
    } else {
        convertedTemperature = celsius + 273.15;
    }

    const unitSymbols = {
        celsius: "°C",
        fahrenheit: "°F",
        kelvin: "K"
    };

    resultElement.textContent =
        `${temperature} ${unitSymbols[fromUnit]} = ` +
        `${convertedTemperature.toFixed(2)} ${unitSymbols[toUnit]}`;
}
