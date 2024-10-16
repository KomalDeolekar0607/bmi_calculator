import React, { useState, useEffect ,useContext } from 'react';
import BMIPieChart from './BMIPieChart';
import { Link } from 'react-router-dom'; 
import BMICategoryBarChart from './BMIBarChart';
import '../assets/styles.css';
import { BMICalculatorContext } from './BMICalculatorContext';

const BMICalculator = () => {
    const { calculateBMIInContext } = useContext(BMICalculatorContext);

    const [bmiData, setBmiData] = useState(null);
    const [showCharts, setShowCharts] = useState(false);
    const [bmiHistory, setBmiHistory] = useState(() => {
        // Retrieve existing history from session storage
        const savedHistory = sessionStorage.getItem('bmiHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const heightCm = parseFloat(e.target.height.value);
        const weightKg = parseFloat(e.target.weight.value);

        // Calculate BMI
        const heightM = heightCm / 100;
        const bmiValue = weightKg / (heightM * heightM);

        // Calculate BMI using context
        calculateBMIInContext(weightKg, heightCm);
        
        // Determine weight status based on BMI
        let weightStatus;
        if (bmiValue < 18.5) {
            weightStatus = 'Underweight';
        } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
            weightStatus = 'Healthy';
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            weightStatus = 'Overweight';
        } else {
            weightStatus = 'Obese';
        }

        // Update state and session storage
        const newEntry = {
            date: new Date().toLocaleDateString(),
            bmiValue: parseFloat(bmiValue.toFixed(2)),
            weightStatus,
            height: `${heightCm} cm`,
            weight: `${weightKg} kg`,
        };

        const updatedHistory = [...bmiHistory, newEntry];
        setBmiHistory(updatedHistory);
        sessionStorage.setItem('bmiHistory', JSON.stringify(updatedHistory));
        
        setBmiData(newEntry);
        setShowCharts(true);
    };

    return (
        <section className="bmi-calculator-section">
            {/* Breadcrumb and Banner */}
            <div className="breadcrumb-banner">
                <div className="banner-text">
                    <h1>BMI Calculator</h1>
                </div>
            </div>

            {/* Intro Text */}
            <div className="bmi-intro-text">
                <h2>Check Your Body</h2>
            </div>

            {/* Chart and Form Side by Side */}
            <div className="bmi-calc-container">
                {/* Left side: Chart */}
                <div className="chart-table">
                    <h3>BMI CALCULATOR CHART</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>BMI</th>
                                <th>Weight Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Below 18.5</td>
                                <td>Underweight</td>
                            </tr>
                            <tr>
                                <td>18.5 - 24.9</td>
                                <td>Healthy</td>
                            </tr>
                            <tr>
                                <td>25.0 - 29.9</td>
                                <td>Overweight</td>
                            </tr>
                            <tr>
                                <td>30.0 and Above</td>
                                <td>Obese</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Right side: Form */}
                <div className="chart-calculate-form">
                    <h3>CALCULATE YOUR BMI</h3>
                    <p>Your Body Mass Index (BMI) is a simple calculation that reflects the relationship between your weight and height. It helps determine whether you're in a healthy weight range, overweight, or underweight. Understanding your BMI is the first step toward setting realistic fitness goals and working toward a balanced, healthier lifestyle.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input type="text" name="height" placeholder="Height / cm" required />
                            <input type="text" name="weight" placeholder="Weight / kg" required />
                        </div>
                        <div className="form-row">
                            <input type="text" placeholder="Age" required />
                            <select required>
                                <option value="">Sex</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <button type="submit">Calculate</button>
                    </form>
                </div>
            </div>

            {/* Charts Section */}
            {showCharts && bmiData && (
                <div className="charts-section" style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                    <BMIPieChart bmiValue={bmiData.bmiValue} weightStatus={bmiData.weightStatus} />
                    <BMICategoryBarChart bmiValue={bmiData.bmiValue} weightStatus={bmiData.weightStatus} />
                </div>
            )}

             {/* Link to Meals Page */}
            {bmiData && (
                <div style={{ marginTop: '20px' }}>
                    <Link to="/meals">View Meal Suggestions</Link>
                </div>
            )}
        </section>
    );
};

export default BMICalculator;
