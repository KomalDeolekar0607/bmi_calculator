// BMICalculatorContext.js
import React, { createContext, useState } from 'react';

// Create the Context
export const BMICalculatorContext = createContext();

// Create a Provider Component
export const BMICalculatorProvider = ({ children }) => {
  const [bmi, setBmi] = useState(null);

  // Method to calculate and set BMI
  const calculateBMIInContext = (weight, height) => {
    console.log(weight)
    console.log(height)
    if (weight && height) {
      const heightInMeters = height / 100;
      const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      console.log(calculatedBMI)
      setBmi(calculatedBMI); // Set the BMI value globally
    }
  };

  return (
    <BMICalculatorContext.Provider value={{ bmi, calculateBMIInContext }}>
      {children}
    </BMICalculatorContext.Provider>
  );
};
