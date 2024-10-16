import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import BMICalculator from './components/BMICalculator';
import Breadcrumb from './components/Breadcrumb';
import History from './components/History';
import Meals from './components/Meals';
import BMRCalculator from './components/BMRCalculator';
import CalorieTracker from './components/CalorieTracker';
import { BMICalculatorProvider } from './components/BMICalculatorContext';


const App = () => {
    return (
        
        <Router>
            <BMICalculatorProvider>
              <div>
                <Header />
                {/* <Breadcrumb /> */}
                <Routes>
                    <Route 
                        path="/" 
                        element={<Breadcrumb />} 
                    />
                
                    <Route 
                        path="/bmi" 
                        element={<BMICalculator />} 
                    />
                    <Route 
                        path="/history" 
                        element={<History />} 
                    />
                    <Route 
                        path="/suggestedMeals" 
                        element={<Meals />} 
                    />
                    <Route 
                        path="/bmr" 
                        element={<BMRCalculator />} 
                    />
                    <Route 
                        path="/calorieTracker" 
                        element={<CalorieTracker />} 
                    />
                   
                </Routes>
                {/* <Meals /> */}
                <Footer />
            </div>
            </BMICalculatorProvider>
        </Router>
        
    );
};

export default App;
