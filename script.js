function convertTemperature() {
    const temperature = parseFloat(
        document.getElementById("temperature").value
    );

    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    const result = document.getElementById("result");

    if (document.getElementById("temperature").value.trim() === "" ||
        isNaN(temperature)) {
        result.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius;

    // Convert the input temperature to Celsius
    if (fromUnit === "C") {
        celsius = temperature;
    } else if (fromUnit === "F") {
        celsius = (temperature - 32) * 5 / 9;
    } else {
        celsius = temperature - 273.15;
    }

    // Convert Celsius to the selected unit
    let converted;

    if (toUnit === "C") {
        converted = celsius;
    } else if (toUnit === "F") {
        converted = (celsius * 9 / 5) + 32;
    } else {
        converted = celsius + 273.15;
    }

    // Kelvin cannot be below absolute zero
    if (celsius < -273.15) {
        result.textContent = "Temperature cannot be below absolute zero.";
        return;
    }

    const symbols = {
        C: "°C",
        F: "°F",
        K: "K"
    };

    result.textContent =
        `${temperature} ${symbols[fromUnit]} = ${converted.toFixed(2)} ${symbols[toUnit]}`;
}