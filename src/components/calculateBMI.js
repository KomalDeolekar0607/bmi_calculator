// calculateBMI.js

/**
 * Calculates BMI and determines the weight status based on height and weight.
 * 
 * @param {number} heightCm - Height in centimeters.
 * @param {number} weightKg - Weight in kilograms.
 * @returns {Object} An object containing height, weight, calculated BMI, and weight status.
 */
const calculateBMI = (heightCm, weightKg) => {
    // Validate the inputs
    if (isNaN(heightCm) || isNaN(weightKg) || heightCm <= 0 || weightKg <= 0) {
        throw new Error("Please enter valid positive numbers for height and weight.");
    }

    // Convert height from centimeters to meters
    const heightM = heightCm / 100;

    // Calculate BMI
    const bmi = weightKg / (heightM * heightM);

    // Determine weight status based on BMI
    let status;
    if (bmi < 18.5) {
        status = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Healthy';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
    } else {
        status = 'Obese';
    }

    // Store data in an object
    const bmiData = {
        height: heightCm,
        weight: weightKg,
        bmi: parseFloat(bmi.toFixed(2)), // Round to 2 decimal places
        status: status,
    };

    return bmiData;
};

export default calculateBMI; // Export the function
