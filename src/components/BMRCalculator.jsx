import React, { useState } from 'react';
import '../assets/bmr.css';

const BMRCalculator = () => {
  const [bmrData, setBmrData] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const heightCm = parseFloat(e.target.height.value);
    const weightKg = parseFloat(e.target.weight.value);
    const age = parseInt(e.target.age.value);
    const sex = e.target.sex.value;

    // BMR Calculation using the Mifflin-St Jeor Equation
    let bmrValue;

    if (sex === 'male') {
      bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
    } else if (sex === 'female') {
      bmrValue = 10 * weightKg + 6.25 * heightCm - 5 * age - 161;
    }

    // Update state with the calculated BMR and show results
    setBmrData({
      bmrValue: Math.round(bmrValue),
      weightKg,
      heightCm,
      age,
      sex,
    });

    setShowResults(true);
  };

  return (
    <section className="bmr-calculator-section">
      {/* Breadcrumb and Banner */}
      <div className="breadcrumb-banner">
        <div className="banner-text">
          <h1>BMR Calculator</h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="bmr-intro-text">
        <h2>Estimate Your Basal Metabolic Rate</h2>
      </div>

      {/* Calculator Form */}
      <div className="bmr-calc-container">
        <div className="bmr-form">
          {/* <h3>CALCULATE YOUR BMR</h3> */}
          <p>
            Your Basal Metabolic Rate (BMR) is the number of calories your body needs to perform basic life-sustaining functions, like breathing and digestion, while at rest. It is important in understanding your daily caloric needs.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="height" placeholder="Height / cm" required />
              <input type="text" name="weight" placeholder="Weight / kg" required />
            </div>
            <div className="form-row">
              <input type="text" name="age" placeholder="Age" required />
              <select name="sex" required>
                <option value="">Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <button type="submit">Calculate BMR</button>
          </form>
        </div>
      </div>

      {/* Results Section */}
      {showResults && bmrData && (
        <div className="bmr-results">
          <h3>Your BMR Results</h3>
          <p><strong>Basal Metabolic Rate (BMR):</strong> {bmrData.bmrValue} calories/day</p>
          <p><strong>Height:</strong> {bmrData.heightCm} cm</p>
          <p><strong>Weight:</strong> {bmrData.weightKg} kg</p>
          <p><strong>Age:</strong> {bmrData.age}</p>
          <p><strong>Sex:</strong> {bmrData.sex === 'male' ? 'Male' : 'Female'}</p>
        </div>
      )}
    </section>
  );
};

export default BMRCalculator;
