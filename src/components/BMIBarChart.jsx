// BMIBarChart.jsx
import React from "react";
import { Chart, CategoryScale, LinearScale, BarElement, Title } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale, LinearScale, BarElement, Title);

const BMIBarChart = ({ bmiValue, weightStatus }) => {
    // Define data for the chart
    const data = {
        labels: ["Your BMI", "Underweight", "Healthy", "Overweight", "Obese"],
        datasets: [
            {
                label: "BMI Value",
                data: [
                    bmiValue,        // Your BMI
                    18.5,            // Underweight threshold
                    24.9,            // Healthy threshold
                    29.9,            // Overweight threshold
                    30               // Obese threshold
                ],
                backgroundColor: [
                    bmiValue < 18.5 ? "#f44336" : "#2196f3", // Your BMI bar color
                    "#4caf50", // Underweight color
                    "#2196f3", // Healthy color
                    "#ff9800", // Overweight color
                    "#f44336", // Obese color
                ],
                borderWidth: 0.5,
            },
        ],
    };

    // Options for the chart
    const options = {
        responsive: true,
        maintainAspectRatio: false, // Allows us to control the height directly
        scales: {
            y: {
                beginAtZero: true,
                max: 40, // Adjust max value based on your needs
            },
        },
    };

    return (
        <div style={{ width: '400px', height: '300px' }}> {/* Adjust width and height here */}
            <h1 style={{ fontSize: '20px', margin: '10px 0' }}>BMI: {bmiValue}</h1>
            <h1 style={{ fontSize: '20px', margin: '10px 0' }}>Your BMI Status: {weightStatus}</h1>
            <div style={{ marginTop: '30px' }}></div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BMIBarChart;
