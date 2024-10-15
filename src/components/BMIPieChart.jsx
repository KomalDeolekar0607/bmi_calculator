// BMIPieChart.jsx
import React from "react";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

// Register necessary components
Chart.register(ArcElement, Tooltip, Legend);

const BMIPieChart = ({ bmiValue, weightStatus }) => {
    // Data for the pie chart
    const data = {
        labels: ["BMI Value", "Healthy Range"],
        datasets: [
            {
                label: "BMI Status",
                data: [bmiValue, 24.9], // Assuming 24.9 is the upper limit of the healthy range
                backgroundColor: ["#f36100", "#4caf50"], // Colors for the chart segments
                hoverOffset: 4,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
        },
    };

    return (
        <div>
            <h3>Your BMI Status</h3>
            <Pie data={data} options={options} /> {/* Use Pie component here */}
            <p>Your BMI is {bmiValue} and you are classified as {weightStatus}.</p>
        </div>
    );
};

export default BMIPieChart;
