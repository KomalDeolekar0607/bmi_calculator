import React from 'react';
import '../assets/styles.css';

const History = () => {
    const bmiHistory = JSON.parse(sessionStorage.getItem('bmiHistory')) || []; // Retrieve from session storage

    return (
        <section className="history-section">
            <div className="container">
                <h2 className="section-title">Your BMI History</h2>
                <table className="history-table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>BMI Value</th>
                            <th>Weight Status</th>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bmiHistory.length > 0 ? (
                            bmiHistory.map((record, index) => (
                                <tr key={index}>
                                    <td>{record.date}</td>
                                    <td>{record.bmiValue}</td>
                                    <td>{record.weightStatus}</td>
                                    <td>{record.height}</td>
                                    <td>{record.weight}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">No history available.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default History;
