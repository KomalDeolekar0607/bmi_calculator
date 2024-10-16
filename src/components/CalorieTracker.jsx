import React, { useState } from 'react';
import '../assets/calorie.css';

const CalorieTracker = () => {
  const [calorieLimit, setCalorieLimit] = useState(0);
  const [caloriesConsumed, setCaloriesConsumed] = useState(0);
  const [foodLog, setFoodLog] = useState([]);
  const [foodInput, setFoodInput] = useState('');
  const [caloriesInput, setCaloriesInput] = useState('');

  const handleCalorieLimitChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setCalorieLimit(isNaN(value) ? 0 : value);
  };

  const handleLogFood = (e) => {
    e.preventDefault();
    const food = foodInput.trim();
    const calories = parseInt(caloriesInput, 10);

    if (!food) {
      alert('Please enter a food item.');
      return;
    }

    if (isNaN(calories) || calories <= 0) {
      alert('Please enter a valid number of calories.');
      return;
    }

    setCaloriesConsumed((prev) => prev + calories);
    setFoodLog((prev) => [...prev, { food, calories }]);
    setFoodInput('');
    setCaloriesInput('');
  };

  const getRemainingCalories = () => {
    return calorieLimit - caloriesConsumed;
  };

  return (
    <div className="calorie-tracker">
      <h1>Calorie Tracker</h1>
      
      <form>
        <label>
          Daily Calorie Limit:
          <input
            type="number"
            value={calorieLimit}
            onChange={handleCalorieLimitChange}
            min="0"
            placeholder="Enter your calorie limit"
          />
        </label>
      </form>

      <h2>Food Log</h2>
      {foodLog.length === 0 ? (
        <p>No food logged yet.</p>
      ) : (
        <ul>
          {foodLog.map((item, index) => (
            <li key={index}>
              {item.food} - {item.calories} calories
            </li>
          ))}
        </ul>
      )}

      <h2>Log Food</h2>
      <form onSubmit={handleLogFood}>
        <div>
          <label>
            Food:
            <input
              type="text"
              value={foodInput}
              onChange={(e) => setFoodInput(e.target.value)}
              required
              placeholder="e.g., Apple"
            />
          </label>
        </div>
        <div>
          <label>
            Calories:
            <input
              type="number"
              value={caloriesInput}
              onChange={(e) => setCaloriesInput(e.target.value)}
              min="1"
              required
              placeholder="e.g., 95"
            />
          </label>
        </div>
        <button type="submit">Log Food</button>
      </form>

      <h2>Remaining Calories</h2>
      <p>{getRemainingCalories()} calories remaining</p>
    </div>
  );
};

export default CalorieTracker;
