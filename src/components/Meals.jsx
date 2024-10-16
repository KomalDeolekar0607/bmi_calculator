// 

import React, { useContext, useState, useEffect } from 'react';
import { BMICalculatorContext } from './BMICalculatorContext'; 
import { Link } from 'react-router-dom';
import '../assets/meals.css';

const Meals = () => {
  const { bmi } = useContext(BMICalculatorContext); 
  const [mealSuggestions, setMealSuggestions] = useState([]);
  const [notToEat, setNotToEat] = useState([]);
  const [category, setCategory] = useState('');

  const mealPlans = {
    underweight: {
      category: 'Underweight',
      meals: ['Avocado Toast with Eggs', 'Oatmeal with Nuts and Dried Fruits', 'Smoothies with Peanut Butter and Protein', 'Chicken and Rice Bowl', 'Greek Yogurt with Honey and Granola'],
      notToEat: ['Sugary Snacks and Drinks', 'Processed Junk Food', 'Low-Calorie Foods'],
    },
    normal: {
      category: 'Normal Weight',
      meals: ['Grilled Chicken with Quinoa and Veggies', 'Salmon with Brown Rice and Broccoli', 'Turkey Wrap with Avocado and Veggies', 'Egg and Veggie Breakfast Burrito', 'Spinach and Chickpea Salad'],
      notToEat: ['Fried Foods', 'Excessive Sugary Drinks', 'Processed Meats'],
    },
    overweight: {
      category: 'Overweight',
      meals: ['Vegetable Soup with Lentils', 'Grilled Fish with Steamed Vegetables', 'Quinoa Salad with Mixed Greens and Chicken', 'Roasted Vegetables with a Lean Protein', 'Egg White Omelette with Spinach'],
      notToEat: ['Fast Foods', 'Sugary Beverages', 'High-Calorie Snacks', 'Refined Carbs (e.g., White Bread, Pasta)'],
    },
    obese: {
      category: 'Obese',
      meals: ['Green Smoothie with Kale and Protein Powder', 'Grilled Chicken Salad with Low-Calorie Dressing', 'Steamed Fish with Asparagus', 'Baked Tofu with Vegetables', 'Zucchini Noodles with Tomato Sauce'],
      notToEat: ['Fried Foods', 'Sugary Snacks and Desserts', 'High-Fat Meats', 'Refined Carbohydrates'],
    },
  };

  useEffect(() => {
    if (bmi) {
      if (bmi < 18.5) {
        setMealSuggestions(mealPlans.underweight.meals);
        setNotToEat(mealPlans.underweight.notToEat);
        setCategory(mealPlans.underweight.category);
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMealSuggestions(mealPlans.normal.meals);
        setNotToEat(mealPlans.normal.notToEat);
        setCategory(mealPlans.normal.category);
      } else if (bmi >= 25 && bmi < 29.9) {
        setMealSuggestions(mealPlans.overweight.meals);
        setNotToEat(mealPlans.overweight.notToEat);
        setCategory(mealPlans.overweight.category);
      } else {
        setMealSuggestions(mealPlans.obese.meals);
        setNotToEat(mealPlans.obese.notToEat);
        setCategory(mealPlans.obese.category);
      }
    }
  }, [bmi]);

  if (bmi === null) {
    return (
      <div className="no-bmi-container">
        <h2 className="meal-plan-heading">Suggested Meals</h2>
        <p>No BMI calculated. Please calculate your BMI first.</p>
        <div className="link-container">
          <Link to="/bmi">Calculate BMI</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="meal-plan-container">
      <h2 className="meal-plan-heading">Suggested Meals</h2>
      <h3 className="meal-category">{/*Category: */}{category}</h3>
      <div className="meals-section">
        <div className="meals-list">
        <div className="eat">
          <h4>What to Eat</h4>
          <ul>
            {mealSuggestions.map((meal, index) => (
              <li key={index}>{meal}</li>
            ))}
          </ul>
          </div>
        </div>
        <div className="meals-list">
        <div className="noteat">
          <h4>What Not to Eat</h4>
          <ul>
            {notToEat.map((food, index) => (
              <li key={index}>{food}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meals;
