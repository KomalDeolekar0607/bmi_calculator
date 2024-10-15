import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';
import Breadcrumb from './components/Breadcrumb';
import History from './components/History';

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Breadcrumb />
                <Routes>
                    <Route 
                        path="/" 
                        element={<BMICalculator />} 
                    />
                    <Route 
                        path="/history" 
                        element={<History />} 
                    />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
